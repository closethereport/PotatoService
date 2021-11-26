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
          to: '/login',
          command: () => {
            this.$router.push('/login');
          },
        },
        {
          label: 'Наша команда',
          icon: 'pi pi-users',
          to: '/team',
          command: () => {
            this.$router.push('/team');
          },
        },
        {
          label: 'Контакты',
          icon: 'pi pi-phone',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        {
          label: 'Профиль',
          icon: 'pi pi-phone',
          to: '/profile',
          command: () => {
            this.$router.push('/profile');
          },
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
});
