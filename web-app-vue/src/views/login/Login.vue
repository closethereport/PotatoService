<template>
  <div class="header-container pt-4">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Авторизация</div>
      </div>
    </div>
    <input v-model="login" placeholder="login" />
    <input v-model="password" placeholder="password" />
  </div>
  <Button type="button" label="Авторизация" @click="loginaut()" />
</template>

<script lang="ts">
import Login from './login';
export default Login;
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #22223b;
  height: 100%;
  color: white;
}
</style>
