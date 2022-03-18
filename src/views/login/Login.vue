<template>
  <div class="w-full h-full px-20 pt-4 pb-20 bg-[#2b3144]">
    <div class="flex items-center justify-around w-full h-full">
      <div class="flex-col items-center justify-center hidden h-full xl:flex">
        <img class="w-60" src="./../../assets/images/login-books.png" />
        <h1 class="text-3xl font-bold text-white">电子书后台管理系统</h1>
      </div>
      <div class="flex flex-col items-center justify-center h-full">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LoginForm from './LoginForm.vue'
</script>
