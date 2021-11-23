<template>
  <div>
    <Panel class="mt-5">
      <template #header> Наша команда </template>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div>
              <Card style="width: 15em">
                <template #header>
                  <div shape="circle">
                    <img src="https://avatars.githubusercontent.com/u/16963395?v=4" />
                  </div>
                </template>
                <template #title>
                  <div class="text-6xl text-primary font-bold mb-3">Nelu</div>
                </template>
                <template #content>
                  <p>Бекенд С# вся хуйня, текст придумаете сами!</p>
                </template>
                <template #footer>
                  <Chip label="GitHub" icon="pi pi-github" class="p-mr-2 p-mb-2" />
                  <Chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2" />
                </template>
              </Card>
            </div>
          </div>
          <div class="col-sm">
            <div>
              <Card style="width: 15em">
                <template #header>
                  <div shape="circle">
                    <img src="https://avatars.githubusercontent.com/u/44950920?v=4" />
                  </div>
                </template>
                <template #title>
                  <div class="text-6xl text-primary font-bold mb-3">Evgeny</div>
                </template>
                <template #content>
                  <p>Бекенд С# вся хуйня, текст придумаете сами!</p>
                </template>
                <template #footer>
                  <Chip label="GitHub" icon="pi pi-github" class="p-mr-2 p-mb-2" />
                  <Chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2" />
                </template>
              </Card>
            </div>
          </div>
          <div class="col-sm">
            <div>
              <Card style="width: 15em">
                <template #header>
                  <div shape="circle">
                    <img src="https://avatars.githubusercontent.com/u/60391902?v=4" />
                  </div>
                </template>
                <template #title>
                  <div class="text-6xl text-primary font-bold mb-3">Clay</div>
                </template>
                <template #content>
                  <p>Бекенд С# вся хуйня, текст придумаете сами!</p>
                </template>
                <template #footer>
                  <Chip label="GitHub" icon="pi pi-github" class="p-mr-2 p-mb-2" />
                  <Chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2" />
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script lang="ts">
import Team from './team';
export default Team;
</script>
<style lang="scss" scoped>
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
