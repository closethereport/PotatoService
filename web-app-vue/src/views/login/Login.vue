<template>
  <div class="header-container pt-4">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Авторизация</div>
      </div>
    </div>
  </div>
  <div class="container ml-auto box-center" style="max-width: 550px">
    <transition-group name="p-message" tag="div">
      <Message style="margin-top: -70px" v-for="msg of messages" :severity="msg.severity" :key="msg.id">{{ msg.content }}</Message>
    </transition-group>

    <div data-cy="HeaderText_LoginHeader" class="display-6 text-center">Login</div>

    <div class="text-center">
      <small class="text-muted mt-2">PT is cool</small>
    </div>

    <div class="d-flex justify-content-center mt-5">
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div class="p-field">
          <span class="p-input-icon-left">
            <i class="pi pi-user" />
            <InputText
              style="width: 100%"
              type="text"
              data-cy="username"
              v-model="v$.login.$model"
              placeholder="Login"
              :class="{ 'p-invalid': v$.login.$errors.length > 0 }"
            />
          </span>

          <div v-if="v$.login.$invalid">
            <div class="input-errors" v-for="error of v$.login.$errors" :key="error.$uid">
              <small v-if="error.$validator === 'required'" class="p-error">Пустой логин</small>
            </div>
          </div>
        </div>
        <div class="p-field mt-3">
          <div class="p-field">
            <span class="p-input-icon-left">
              <Password
                :feedback="false"
                inputStyle="padding-left: 2.5rem !important;"
                toggleMask
                data-cy="password"
                v-model="v$.password.$model"
                :class="{ 'p-invalid': v$.password.$errors.length > 0 }"
                placeholder="Password"
              >
              </Password>
              <i class="pi pi-lock" />
            </span>

            <div v-if="v$.password.$invalid">
              <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                <small v-if="error.$validator === 'required'" class="p-error">Пароль пустой</small>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="p-field-checkbox">
            <Checkbox id="binary" v-model="isRememberMe" :binary="true" />
            Чужой компьютер
          </div>
        </div>

        <Button
          data-cy="login"
          :disable="loginButton"
          type="submit"
          :disabled="v$.$invalid || !loginButton"
          label="Вход"
          class="mt-4"
          style="margin-bottom: 2rem"
        />
        <a href="/registration" class="card-link display-7">Registration</a>
      </form>
    </div>
  </div>
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
