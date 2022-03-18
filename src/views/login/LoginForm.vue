<template>
  <h1 class="pb-2 text-3xl font-bold text-center text-white">登录</h1>
  <a-form
    class="w-80"
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      name="username"
      :rules="[{ required: true, message: '请输入您的用户名!' }]"
    >
      <a-input v-model:value="formState.username" size="large" />
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: '请输入您的密码!' }]"
    >
      <a-input-password v-model:value="formState.password" size="large" />
    </a-form-item>

    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        size="large"
        shape="round"
        block
        >登录</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  interface FormState {
    username: string
    password: string
  }
  const formState = reactive<FormState>({
    username: 'admin',
    password: 'admin',
  })

  const onFinish = (values: any) => {
    console.log('Success:', values)
    handleLogin()
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  async function handleLogin() {
    alert('登录')
  }
</script>
