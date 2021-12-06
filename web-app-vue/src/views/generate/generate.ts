import { defineComponent } from 'vue';
import TemplateDelectDialog from '@/components/template-select-dialog/Template-select-dialog.vue';
export default defineComponent({
  data() {
    return { displayTemplates: false };
  },
  components: { TemplateDelectDialog },
  computed: {},
  methods: {
    onGenerate() {
      this.$confirm.require({
        message: 'В дальнейшем можно будет снова создать титульный лист',
        header: 'Сохранить шаблон?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        },
      });
    },
  },
});
