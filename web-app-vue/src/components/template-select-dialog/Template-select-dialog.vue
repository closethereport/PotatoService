<template>
  <DataTable
    :value="templates"
    selectionMode="single"
    dataKey="id"
    v-model:selection="selectedTemplates"
    :scrollable="true"
    scrollHeight="flex"
    :loading="loading"
  >
    <Column field="faculty" header="Факультет" style="min-width: 200px"></Column>
    <Column field="department" header="Кафедра" style="min-width: 200px"></Column>
    <Column field="jobName" header="Тип работы" style="min-width: 200px"></Column>
    <Column field="lessonName" header="Дисциплина" style="min-width: 200px"></Column>
    <Column field="fullNameTeacher" header="Ф.И.О преподователя" style="min-width: 200px"></Column>
    <Column field="courseNumber" header="Курс" style="min-width: 200px"></Column>
    <Column field="groupName" header="Группа" style="min-width: 200px"></Column>
  </DataTable>

  <div class="d-flex justify-content-end m-2"><Button @click="select()" label="Заполнить из шаблона" class="p-button-sm" /></div>
</template>

<script lang="ts">
import { mapActionsNamespaced, mapGettersRoot } from '@/helpers/typedMappers.helper';
import { TemplateInfoDto } from '@/interfaces/swagger/templateInfoDto';
import { Getters, GettersTypes } from '@/store/getters';
import { TemplatesAction, TemplatesActionType } from '@/store/modules/templates/templates.actions';
import { storeModule } from '@/store/store-manager/store.constants';
import { defineComponent } from 'vue';
const templateDelectDialog = defineComponent({
  name: 'template-select-dialog',
  emits: ['selected'],
  data() {
    return {
      templates: {} as TemplateInfoDto[],
      loading: false,
      selectedTemplates: {} as TemplateInfoDto | null,
    };
  },
  computed: {
    ...mapGettersRoot<GettersTypes>()([Getters.currentUser]),
  },
  methods: {
    ...mapActionsNamespaced<TemplatesActionType>()(storeModule.Templates, [TemplatesAction.Get_Templates_By_User_Id]),
    updateTemplates() {
      if (this.currentUser?.id) {
        this.loading = true;
        this.Get_Templates_By_User_Id(this.currentUser.id).then(({ data, status }: { data: string | TemplateInfoDto[]; status: number }) => {
          if (status != 200) {
            this.$toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Шаблоны не получены!', life: 3000 });
          } else {
            this.templates = data as TemplateInfoDto[];
          }
          this.loading = false;
        });
      }
    },
    select() {
      console.log(this.selectedTemplates);
      this.$emit('selected', this.selectedTemplates);
    },
  },
  mounted() {
    this.updateTemplates();
  },
});

export default templateDelectDialog;
export type templateDelectDialogRef = InstanceType<typeof templateDelectDialog>;
</script>

<style lang="scss" scoped></style>
