import Authorization from '@/helpers/authorization-helper';
import { mapGettersRoot } from '@/helpers/typedMappers.helper';
import { Getters, GettersTypes } from '@/store/getters';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      items: [] as any[],
    };
  },
  mounted() {
    this.createMenu();
  },
  computed: {
    ...mapGettersRoot<GettersTypes>()([Getters.isAuthenticated]),
  },
  watch: {
    isAuthenticated() {
      this.createMenu();
    },
  },
  methods: {
    createMenu() {
      this.items = [
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
        {
          hidden: this.isAuthenticated,
          label: 'Авторизация',
          icon: 'pi pi-sign-in',
          to: '/login',
          command: () => {
            this.$router.push('/login');
          },
        },
        {
          hidden: !this.isAuthenticated,
          label: 'Выход',
          icon: 'pi  pi-sign-out',
          to: '/',
          command: () => {
            Authorization.logout();
          },
        },
        {
          label: 'registration',
          icon: 'pi pi-phone',
          to: '/registration',
          command: () => {
            this.$router.push('/registration');
          },
        },
      ];
    },
  },
});
