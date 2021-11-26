<template>
  <div class="grid grid-nogutter surface-section">
    <div class="col-12 md:col-5 text-center md:text-left flex">
      <section>
        <p class="block text-6xl p-6 text-primary font-bold mb-0" style="margin-bottom: 4rem">Профиль</p>
        <div class="p-6">
          <span class="block text-3xl font-bold mb-0">Логин: {{ Login }}</span>
          <span class="block text-3xl font-bold mb-0">Email: {{ Email }}</span>
          <span class="block text-3xl font-bold mb-0">Имя: {{ Name }}</span>
          <span class="block text-3xl font-bold mb-0">Фамилия: {{ Surname }}</span>
          <span class="block text-3xl font-bold mb-0">Отчество: {{ Patronymic }}</span>
          <span class="block text-3xl font-bold mb-0">Группа: {{ Group }}</span>
          <span class="block text-3xl font-bold mb-0">Курс: {{ Course }}</span>
          <span class="block text-3xl font-bold mb-0">Специаальность: {{ Specialization }}</span>
        </div>
        <div class="text-4xl text-primary font-bold mb-0" style="padding-left: 3rem">Предметы:</div>
        <div class="hex" style="padding: none">
          <div class="p-6">
            <li class="text-2xl font-bold mb-0" style="color: #ffffff" v-for="item in items" :key="item.Name">
              {{ item.Name }}
            </li>
          </div>
        </div>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden" style="padding-left: 8rem">
      <img
        src="http://svgur.com/i/bph.svg"
        alt="Image"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 12%, 100% 7%, 100% 100%, 0 100%); width: 90%"
      />
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
