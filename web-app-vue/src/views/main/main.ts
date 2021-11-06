import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      items: [
        {
          label: 'Главная',
          icon: 'pi pi-home',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        { separator: true },
        {
          label: 'О сервисе',
          icon: 'pi pi-book',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        {
          label: 'Авторизация',
          icon: 'pi pi-sign-in',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
});
