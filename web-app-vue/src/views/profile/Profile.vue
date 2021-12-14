<template>
  <div class="header-container">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Профиль</div>
      </div>
    </div>
  </div>
  <div class="container p-5">
    <form @submit.prevent="handleSubmit(!v$.$invalid)">
      <div class="field">
        <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Login</label>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="Login" v-model="user.login" disabled />
        </div>
      </div>
      <div class="field">
        <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Email</label>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-envelope"></i>
          </span>
          <InputText placeholder="Email" v-model="user.email" />
        </div>
      </div>
      <div class="d-flex bd-highlight">
        <div class="flex-grow-1 bd-highlight">
          <div class="p-fluid p-grid">
            <div class="p-field p-col-12" style="padding-right: 2rem">
              <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Ф.И.О</label>
              <InputText id="inputtext" type="text" v-model="user.fullName" placeholder="Васильев Вениамин Созонович" />
            </div>
          </div>
        </div>
        <div class="flex-grow-1 bd-highlight">
          <div class="p-fluid p-grid">
            <div class="p-field p-col-12" style="padding-left: 2rem">
              <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Группа</label>
              <InputText id="inputtext" type="text" placeholder="ИКПИ: " v-model="userTemplateDto.groupName" />
            </div>
          </div>
        </div>
      </div>
      <div class="field mb-4" style="margin-top: 1rem">
        <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Факультет</label>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-briefcase"></i>
          </span>
          <InputText id="inputtext" type="text" placeholder="Информационных сетей и систем" v-model="userTemplateDto.faculty" />
        </div>
      </div>
      <div class="d-flex bd-highlight">
        <div class="flex-grow-1 bd-highlight">
          <div class="p-fluid p-grid">
            <div class="p-field p-col-12" style="padding-right: 2rem">
              <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Старый пароль</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-lock"></i>
                </span>
                <InputText id="inputtext" type="text" placeholder="Pasword" v-model="user.password" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow-1 bd-highlight">
          <div class="p-fluid p-grid">
            <div class="p-field p-col-12" style="padding-left: 2rem">
              <label for="nickname" class="font-medium" style="padding-left: 0.25rem">Новый пароль</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-unlock"></i>
                </span>
                <InputText id="inputtext" type="text" placeholder="New password" v-model="alterUserDto.oldPassword" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row-reverse" style="margin-top: 2rem">
        <Button
          label="Сохранить"
          type="submit"
          class="p-button-outlined"
          style="color: #22223b"
          :disable="isEnableAlterButton"
          :disabled="v$.$invalid || !isEnableAlterButton"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Profile from './profile';
export default Profile;
</script>
<style lang="scss" scoped>
.hex {
  background: #22223b;
  margin-top: 1rem;
  -webkit-clip-path: polygon(0% 0%, 95% 0%, 100% 20%, 100% 100%, 0% 100%);
  flex-button: auto;
}
.header-container {
  background-color: #22223b;
  height: 100%;
  color: white;
}
</style>
