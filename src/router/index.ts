import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue'),
    },
  ],
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
