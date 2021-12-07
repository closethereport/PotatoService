<template>
  <div class="header-container pt-0" id="layer1">
    <div class="py-0">
      <div class="containerHeader text-700 text-center">
        <div class="headerText text-white font-bold text-6xl mb-0 mt-auto">Potatoes</div>
        <div class="headerText text-lightgray font-mukta text-3xl mb-1 mt-0">Иновационное решение для создания титульных листов</div>
        <Particles class="headerParticles" id="tsparticles" :options="particlesOptions" />
      </div>
    </div>
  </div>

  <div class="mainBlock surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-Mukta text-2xl">
      <span class="text-900">Один сервис, </span>
      <span class="text-blue-600">а сколько пользы</span>
    </div>
    <div class="text-700 text-sm mb-6">Поймите, сложное - просто!</div>
    <div class="grid">
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
          <i class="pi pi-check-circle text-4xl text-blue-500"></i>
        </span>
        <div class="text-900 mb-3 font-medium">Простота использования</div>
        <span class="text-700 text-sm line-height-3">Интуитивно понятный интерфейс</span>
      </div>
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
          <i class="pi pi-github text-4xl text-blue-500"></i>
        </span>
        <div class="text-900 mb-3 font-medium">Открытый код</div>
        <span class="text-700 text-sm line-height-3">Открытый исходный код</span>
      </div>
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
          <i class="pi pi-apple text-4xl text-blue-500"></i>
        </span>
        <div class="text-900 mb-3 font-medium">Вкусное решение</div>
        <span class="text-700 text-sm line-height-3">Работает, пока вы едите</span>
      </div>
    </div>
  </div>

  <div class="grid grid-nogutter surface-section text-800 px-4 py-8 md:px-6 lg:px-8">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
      <section>
        <span class="block text-6xl font-Mukta mb-0">Создавайте релевантные титульные листы</span>
        <div class="text-7xl text-primary font-Mukta mb-0">в несколько кликов</div>
        <p class="mt-0 mb-0 text-700 line-height-3">Наш алгоритм оформления официально одобрен вышестоящим руководством.</p>
        <p class="mt-0 mb-4 text-700 line-height-3">Пытаются доказать обратное? Предъявите печать!</p>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img
        src="@//assets/svg/indexMainPicture.svg"
        alt="MainImage"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 12%, 100% 7%, 100% 100%, 0 100%)"
        width="700"
        height="700"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Index from './index';
export default Index;
</script>

<style lang="scss" scoped>
//TODO: вынести стили заголовка в файл и переиспользовать по всему проекту
//TODO: Вынести заголовок в компонету и переиспользовать (чтобы не дублировать header-container на каждой странице)

// ::v-deep() {

.containerHeader {
  padding-top: 200px;
}

.headerText {
  position: relative;
  z-index: 2;
}
#tsparticles {
  z-index: 1;
}
.mainBlock {
  margin-top: 250px;
}
.header-container {
  background: none;
  position: relative;
  height: 100%;
}
.header-text {
  padding: 200px;
}

.headerParticles {
  position: absolute;
  width: 100%;
  height: 550px;
  top: 0px;
}
</style>
