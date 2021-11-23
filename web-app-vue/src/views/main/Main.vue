<template>
  <div style="background: #22223b" class="d-flex">
    <div class="d-flex m-auto">
      <Menubar :model="items">
        <template #item="{ item }">
          <Button
            :disabled="item.disabled"
            v-if="item.command"
            :class="{ 'btn-menu-activ': $route.path === item.to }"
            class="p-button-text mr-2 p-button-sm"
            @click="item.command"
            :data-cy="item.label + 'Button'"
            :label="item.label"
            :icon="item.icon"
          />
        </template>
      </Menubar>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import Main from './main';
export default Main;
</script>

<style lang="scss" scoped>
/* Переопределение классов css в prime Vue */
::v-deep() {
  .p-menubar {
    padding: 0.5 rem;
    background: transparent !important;
    color: #495057;
    border: none !important;
    border-radius: 3 px;
  }
}
</style>
