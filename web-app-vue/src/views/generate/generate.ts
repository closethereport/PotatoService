import { defineComponent } from 'vue';
import TemplateDelectDialog from '@/components/template-select-dialog/Template-select-dialog.vue';
import { mapActionsNamespaced, mapGettersRoot } from '@/helpers/typedMappers.helper';
import { TemplatesAction, TemplatesActionType } from '@/store/modules/templates/templates.actions';
import { storeModule } from '@/store/store-manager/store.constants';
import { Getters, GettersTypes } from '@/store/getters';
import { TemplateInfoDto } from '@/interfaces/swagger/templateInfoDto';
import { DocumentGeneratorAction, DocumentGeneratorActionType } from '@/store/modules/documentGenerator/documentGenerator.actions';
import { DocumentGeneratorDto } from '@/interfaces/swagger/documentGeneratorDto';

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
    ...mapActionsNamespaced<DocumentGeneratorActionType>()(storeModule.DocumentGenerator, [DocumentGeneratorAction.generate]),

    fillTemplatesPreset(templateInfo: TemplateInfoDto) {
      if (templateInfo) {
        this.template = templateInfo;
        this.displayTemplates = false;
        console.log('fillTemplatesPreset', templateInfo);
      }
    },

    onGenerate() {
      this.generate({
        userFullName: 'string',
        templateInfo: {
          faculty: 'string',
          department: 'string',
          jobName: 'string',
          subject: 'string',
          lessonName: 'string',
          fullNameTeacher: 'string',
          courseNumber: 'string',
          groupName: 'string',
          id: 0,
          userId: 0,
        },
      } as DocumentGeneratorDto).then(({ data, status }: { data: any; status: number }) => {
        console.log(data);
        const fileURL = URL.createObjectURL(new Blob(data.data));
        const fileLink = window.document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'Отчет.doc');
        window.document.body.appendChild(fileLink);
        fileLink.click();
      });

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
