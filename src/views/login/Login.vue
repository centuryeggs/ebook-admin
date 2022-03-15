<template>
  <div class="login">
    <div class="left">
      <img src="./../../assets/images/login-books.png" alt="" />
    </div>
    <div class="right">
      <div class="login-title">登陆</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
  data() {},
})
</script>

<style lang="sass" scoped>
.login
  height: 100%
  width: 100%
  background-color: #2b3144
  display: flex
  justify-content: space-between
  align-items: center
  .left
    img
      width: 250px
</style>
