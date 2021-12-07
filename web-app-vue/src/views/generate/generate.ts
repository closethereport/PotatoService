import { defineComponent } from 'vue';
import TemplateDelectDialog from '@/components/template-select-dialog/Template-select-dialog.vue';
import { mapActionsNamespaced, mapGettersRoot } from '@/helpers/typedMappers.helper';
import { TemplatesAction, TemplatesActionType } from '@/store/modules/templates/templates.actions';
import { storeModule } from '@/store/store-manager/store.constants';
import { Getters, GettersTypes } from '@/store/getters';
import { TemplateInfoDto } from '@/interfaces/swagger/templateInfoDto';

//faculty	- Факультет («Инфокоммуникационных сетей и систем»)
//department - Кафедра («Программной инженерии и вычислительной техники»)
//jobName	- название работы  (Курсовая работа)
//subject	- Тема работы (HTML 5 - Перспектив)
//lessonName	- Название предмета («Системы искусственного интеллекта»)
//fullNameTeacher	- Имя преподователя
//courseNumber - номер курса
//groupName	- название группы

export default defineComponent({
  data() {
    return {
      displayTemplates: false,
      template: {} as TemplateInfoDto,
    };
  },
  components: { TemplateDelectDialog },
  computed: {
    ...mapGettersRoot<GettersTypes>()([Getters.currentUser]),
  },
  methods: {
    ...mapActionsNamespaced<TemplatesActionType>()(storeModule.Templates, [TemplatesAction.Add, TemplatesAction.Get_Templates_By_User_Id]),

    fillTemplatesPreset(templateInfo: TemplateInfoDto) {
      if (templateInfo) {
        this.template = templateInfo;
        this.displayTemplates = false;
        console.log('fillTemplatesPreset', templateInfo);
      }
    },

    onGenerate() {
      this.$confirm.require({
        message: 'В дальнейшем можно будет снова создать титульный лист',
        header: 'Сохранить шаблон?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.Templates_Add(this.template).then(({ data, status }: { data: string | TemplateInfoDto; status: number }) => {
            this.$toast.add({ severity: 'info', summary: 'Успешно', detail: 'Шаблон сохранен!', life: 3000 });
          });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        },
      });
    },
  },
});
