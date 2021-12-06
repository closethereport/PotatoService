<template>
  <Dialog header="Выбор шаблона" v-model:visible="displayTemplates" :style="{ width: '50vw' }">
    <TemplateDelectDialog />
  </Dialog>

  <div class="header-container">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Генерация титульного листа</div>
      </div>
    </div>
  </div>

  <div class="container p-5">
    <div class="surface-section">
      <div class="font-medium text-3xl text-900 mb-3">Шаблон</div>
      <div class="text-500 mb-5">Заполните данные для создания титульного листа</div>
      <div class="d-flex justify-content-end m-2"><Button @click="displayTemplates = true" label="Заполнить из шаблона" class="p-button-sm" /></div>
      <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">JobName</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Subject</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">LessonName</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">FullNameTeacher</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">CourseNumber</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">CourseNumber</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">GroupName</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Faculty</div>
          <div class="text-900 w-full md:flex-order-0 mb-2 mt-2">
            <InputText type="text" class="p-inputtext w-100" placeholder="Large" />
          </div>
        </li>
      </ul>
      <div class="d-flex justify-content-center m-2"><Button @click="onGenerate()" label="Создать!" class="p-button" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import Generate from './generate';
export default Generate;
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
