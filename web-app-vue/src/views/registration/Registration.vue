<template>
  <div class="header-container pt-4">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Регистрация</div>
      </div>
    </div>
  </div>
  <div class="container ml-auto box-center" style="max-width: 550px">
    <transition-group name="p-message" tag="div">
      <Message style="margin-top: -70px" v-for="msg of messages" :severity="msg.severity" :key="msg.id">{{ msg.content }}</Message>
    </transition-group>

    <div data-cy="HeaderText_LoginHeader" class="display-6 text-center">Registration</div>

    <div class="text-center">
      <small class="text-muted mt-2">PT is good</small>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <form class="p-fluid">
        <div class="p-field">
          <span class="p-input-icon-left">
            <i class="pi pi-user" />
            <InputText style="width: 100%" type="text" data-cy="username" placeholder="Login" />
          </span>
        </div>
        <div class="p-field mt-3">
          <div class="p-field">
            <span class="p-input-icon-left">
              <i class="pi pi-envelope" />
              <InputText style="width: 100%" type="text" data-cy="username" placeholder="Email" />
            </span>
          </div>
        </div>
        <div class="p-field mt-3">
          <div class="p-field">
            <span class="p-input-icon-left">
              <Password :feedback="false" inputStyle="padding-left: 2.5rem !important;" toggleMask data-cy="password" placeholder="Password">
              </Password>
              <i class="pi pi-lock" />
            </span>
          </div>
        </div>
        <div class="p-field mt-3">
          <div class="p-field">
            <span class="p-input-icon-left">
              <Password :feedback="false" inputStyle="padding-left: 2.5rem !important;" toggleMask data-cy="password" placeholder="Repeat password">
              </Password>
              <i class="pi pi-unlock" />
            </span>
          </div>
        </div>

        <Button data-cy="login" :disable="loginButton" type="submit" label="Зарегистрироваться" class="mt-4" style="margin-bottom: 2rem" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Registration from './registration';
export default Registration;
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #22223b;
  height: 100%;
  color: white;
}
</style>
