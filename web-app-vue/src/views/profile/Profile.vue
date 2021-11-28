<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col">
        <p class="block text-6xl p-6 text-primary font-bold mb-0" style="margin-bottom: 4rem">Профиль</p>
        <div class="p-6">
          <label class="block font-bold mb-0 fs-5">Логин: {{ Login }}</label>
          <label class="block font-bold mb-0 fs-5">Email: {{ Email }}</label>
          <div class="flex">
            <label class="block font-bold mb-0 fs-5">Имя: </label>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Name" />
          </div>
          <div class="flex">
            <label class="block font-bold mb-0 fs-5">Фамилия: </label>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Surname" />
          </div>
          <div class="flex">
            <label class="block font-bold mb-0 fs-5">Отчество: </label>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Patronymic" />
          </div>
          <div class="flex">
            <label class="block font-bold mb-0 fs-5">Группа: </label>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Group" />
          </div>
          <div class="flex">
            <label class="block font-bold mb-0 fs-5">Курс: </label>
            <Dropdown
              style="width: 100%; margin: 2px"
              v-model="selectcourse"
              :options="Courses"
              optionLabel="Course"
              optionValue="code"
              placeholder="Select Course"
            />
          </div>
          <div class="flex-grid">
            <label class="block font-bold mb-0 fs-5">Специаальность: </label>
            <InputText type="text" style="width: 100%; margin: 2px; margin-left: 0px" v-model="Specialization" />
          </div>
          <div class="d-flex flex-row-reverse" style="margin-top: 2rem">
            <Button label="Сохранить" class="p-button-outlined" style="color: #22223b" />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="align-self-center">
          <img src="@//assets/img/potato/potato-and-monoculars.jpg" alt="Image" class="" style="width: 90%; height: auto" />
        </div>
      </div>
    </div>
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
</style>
