<template>
  <h1 class="pb-2 text-3xl font-bold text-center text-white">登录</h1>
  <a-form
    class="w-80"
    :model="formState"
    name="basic"
    :rules="rules"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item name="username">
      <a-input v-model:value="formState.username" size="large" />
    </a-form-item>

    <a-form-item name="password">
      <a-input-password v-model:value="formState.password" size="large" />
    </a-form-item>

    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        size="large"
        shape="round"
        block
        :loading="loading"
        >登录</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { RuleObject } from 'ant-design-vue/lib/form'

  interface FormState {
    username: string
    password: string
  }
  const formState = reactive<FormState>({
    username: 'admin',
    password: 'adminadmin',
  })
  const loading = ref(false)
  let validatePass = async (_rule: RuleObject, value: string) => {
    if (value === '') {
      return Promise.reject('请输入密码!')
    } else if (value.length < 8) {
      return Promise.reject('密码不可少于8位!')
    } else {
      return Promise.resolve()
    }
  }
  const rules = {
    username: [{ required: true, message: '请输入您的用户名!' }],
    password: [{ required: true, validator: validatePass, trigger: 'change' }],
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
    handleLogin()
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  async function handleLogin() {
    loading.value = true
  }
</script>
