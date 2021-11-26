<template>
  <div class="header-container">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-white font-bold text-5xl mb-3">Наша команда</div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="d-flex flex-wrap g-4">
        <div class="card card-pading" style="width: 18rem; margin: 1rem">
          <img src="https://avatars.githubusercontent.com/u/16963395?v=4" class="card-img-top img-border" alt="..." />
          <div class="card-body">
            <h class="text-3xl card-title font-bold text-heder-style">Nelu</h>
          </div>
          <div class="d-flex justify-content-center">
            <Button label="GitHub" icon="pi pi-github" class="div-button" style="margin: 5px" @click="redirectTo(LinkNelu)" />
            <Button label="Google" icon="pi pi-google" class="div-button" style="margin: 5px" />
          </div>
        </div>
        <div class="card card-pading" style="width: 18rem; margin: 1rem">
          <img src="https://avatars.githubusercontent.com/u/44950920?v=4" class="card-img-top img-border" alt="..." />
          <div class="card-body">
            <h class="text-3xl card-title font-bold text-heder-style">Closethereport</h>
          </div>
          <div class="d-flex justify-content-center">
            <Button label="GitHub" icon="pi pi-github" class="div-button" style="margin: 5px" @click="redirectTo(LinkClosethereport)" />
            <Button label="Google" icon="pi pi-google" class="div-button" style="margin: 5px" />
          </div>
        </div>
        <div class="card card-pading" style="width: 18rem; margin: 1rem">
          <img src="https://avatars.githubusercontent.com/u/60391902?v=4" class="card-img-top img-border" alt="..." />
          <div class="card-body">
            <h class="text-4xl card-title font-bold text-heder-style">Clay</h>
          </div>
          <div class="d-flex justify-content-center">
            <Button label="GitHub" icon="pi pi-github" class="div-button" style="margin: 5px" @click="redirectTo(LinkClayers)" />
            <Button label="Google" icon="pi pi-google" class="div-button" style="margin: 5px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Team from './team';
export default Team;
</script>
<style lang="scss" scoped>
.header-container {
  background-color: #22223b;
  height: 100%;
  color: white;
}
.div-padding {
  padding-left: 8rem;
  padding-right: 4rem;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}
.div-button {
  margin: 1rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  background: #22223b;
  border: none;
}
.col-padding {
  margin: 1rem;
}
.card-pading {
  border: none;
  border-radius: 20px;
}
.img-border {
  border-radius: 20px 20px 0px 0px;
}
.text-heder-style {
  color: #2196f3;
  padding-top: 0.5rem;
  padding-left: 0.75rem;
}

::v-deep() {
  .p-panel .p-panel-header {
    padding: 20px;
    background: #22223b;
    color: #2196f3;
  }
  .p-panel .p-component {
    width: 45%;
  }
  .text-6xl {
    font-size: 2rem !important;
  }
  .p-component {
    font-size: 25px;
    width: 80%;
  }
}
</style>
