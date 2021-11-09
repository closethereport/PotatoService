<template>
  <div class="header-container pt-4">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Potatoes</div>
        <div class="text-white text-2xl mb-5">Иновационное решение для оформления титульных листов перед сдачей лабораторных работ!</div>
        <Button label="Вход" icon="pi pi-sign-in" class="font-bold px-3 py-1 p-button-raised p-button-rounded white-space-nowrap"></Button>
        <Particles id="tsparticles" :options="particlesOptions" />
      </div>
    </div>
  </div>

  <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-2xl">
      <span class="text-900">One Product, </span>
      <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 text-sm mb-6">Поймите, сложное - просто!</div>
    <div class="grid">
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
          <i class="pi pi-check-circle text-4xl text-blue-500"></i>
        </span>
        <div class="text-900 mb-3 font-medium">Easy to Use</div>
        <span class="text-700 text-sm line-height-3">Интуитивно понятный интерфейс. </span>
      </div>
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
          <i class="pi pi-github text-4xl text-blue-500"></i>
        </span>
        <div class="text-900 mb-3 font-medium">Open Source</div>
        <span class="text-700 text-sm line-height-3">Открытый исходный код. </span>
      </div>
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
          <i class="pi pi-lock text-4xl text-blue-500"></i>
        </span>
        <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
        <span class="text-700 text-sm line-height-3">Полная анонимность и защита по всем стандартам безопасности.</span>
      </div>
    </div>
  </div>

  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
      <section>
        <span class="block text-6xl font-bold mb-0">Создавайте релевантные титульные листы</span>
        <div class="text-6xl text-primary font-bold mb-0">в несколько кликов</div>
        <div class="text-4xl text-primary font-bold mb-0">Отправляют на пересдачу?</div>
        <div class="text-4xl text-primary font-bold mb-0">Заставляют перепечатывать?</div>
        <div class="text-4xl text-primary font-bold mb-3">Стоят на своем, доказывая устаревшие стандарты оформления?</div>
        <p class="mt-0 mb-0 text-700 line-height-3">Наш алгоритм оформления официально одобрен вышестоящим руководством.</p>
        <p class="mt-0 mb-4 text-700 line-height-3">Пытаются доказать обратное? Предъявите печать!</p>

        <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
        <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img
        src="http://svgur.com/i/bph.svg"
        alt="Image"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 12%, 100% 7%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Index from './index';
export default Index;
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #22223b;
  height: 100%;
  color: white;
}

.header-text {
  padding: 200px;
}
</style>
