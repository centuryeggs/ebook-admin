import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  // loadEnv方法会读取指定目录下的.env文件，并将其转换成环境变量对象
  const env = loadEnv(mode, root)

  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv
  console.log(command)

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true,
      port: VITE_PORT,
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
      // minify: 'terser',
      /**
       * 当 minify=“minify:'terser'” 解开注释
       * Uncomment when minify="minify:'terser'"
       */
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    plugins: [vue()],
  }
}
