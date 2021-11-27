<template>
  <div class="grid grid-nogutter surface-section">
    <div class="md:col-5 text-center md:text-left flex">
      <section>
        <p class="block text-6xl p-6 text-primary font-bold mb-0" style="margin-bottom: 4rem">Профиль</p>
        <div class="p-6">
          <span class="block text-3xl font-bold mb-0">Логин: {{ Login }}</span>
          <span class="block text-3xl font-bold mb-0">Email: {{ Email }}</span>
          <div class="flex">
            <span class="block text-3xl font-bold mb-0">Имя: </span>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Name" />
          </div>
          <div class="flex">
            <span class="block text-3xl font-bold mb-0">Фамилия: </span>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Surname" />
          </div>
          <div class="flex">
            <span class="block text-3xl font-bold mb-0">Отчество: </span>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Patronymic" />
          </div>
          <div class="flex">
            <span class="block text-3xl font-bold mb-0">Группа: </span>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Group" />
          </div>
          <div class="flex">
            <span class="block text-3xl font-bold mb-0">Курс: </span>
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
            <span class="block text-3xl font-bold mb-0">Специаальность: </span>
            <InputText type="text" style="width: 100%; margin: 2px" v-model="Specialization" />
          </div>
          <div class="d-flex flex-row-reverse" style="margin-top: 2rem">
            <Button label="Сохранить" class="p-button-outlined" style="color: #22223b" />
          </div>
        </div>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden" style="padding-left: 1rem; margin-left: 3rem; margin-top: none">
      <img src="@//assets/img/potato/potato2.svg" alt="Image" class="md:ml-auto block md:h-full" style="width: 50%" />
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
.grid {
  display: flex;
  flex-wrap: none;
}
</style>
