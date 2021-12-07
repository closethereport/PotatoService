import Api from '@/client-api/api';
import Cookies from '@/helpers/cookies';
import { mapActionsNamespaced } from '@/helpers/typedMappers.helper';
import { LoginOutDto } from '@/interfaces/swagger/loginOutDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import store from '@/store';
import { UsersAction, UsersActionType } from '@/store/modules/users/users.actions';
import { MutationTypes } from '@/store/mutations';
import { storeModule } from '@/store/store-manager/store.constants';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { defineComponent } from 'vue';

export default defineComponent({
  //Для проверки полей логина (пустые и тд)
  validations() {
    return {
      login: {
        required,
      },
      password: {
        required,
      },
    };
  },
  data() {
    return {
      v$: useVuelidate(), //валидация полей по правилиам выше
      login: '',
      password: '',
      isRememberMe: false, //запоминать ли логин
      messages: [] as any[], //сообщения пользователю об ошибке
      loginButton: true, //включена ли кнопка кнопка авторизации TODO: переименовать нормально
    };
  },
  methods: {
    //мапинг методов из стора (в сторе методы для работы с api)
    ...mapActionsNamespaced<UsersActionType>()(storeModule.Users, [UsersAction.login]),

    handleSubmit(isFormValid): void {
      if (!isFormValid) {
        return;
      }

      this.loginIn();
    },
    //атворизация
    loginIn(): void {
      const component = this;
      this.hideAlert();
      component.loginButton = false;
      //отправка запроса к сервера на авторизацию
      this.authorization({
        login: component.login,
        password: component.password,
      }).then(({ data, status }: { data: string | LoginOutDto; status: number }) => {
        this.processLoginResult({ data, status });
      });
    },
    //обработка ответа от сервера
    processLoginResult({ data, status }: { data: any | LoginOutDto; status: number }): void {
      if (status != 200) {
        //если статус код ответа хуеый - выводим сообщение пользователю
        this.showAlert(data.message ?? data);
        this.loginButton = true;
      } else {
        //все гуд, авторизация прошла
        const user = data as LoginOutDto;
        this.hideAlert();
        const dateExpire = new Date();
        const nextYear = dateExpire.getFullYear() + 1;
        dateExpire.setFullYear(nextYear);
        store.commit(MutationTypes.SET_CURRENT_USER, { user: user, isSession: this.isRememberMe });
        Api.instance.authorize(user.token!);
        this.loginButton = true;
        this.$router.push('/');
      }
    },
    showAlert(message: string): void {
      this.messages = [{ severity: 'error', content: message, id: 1 }];
    },
    hideAlert(): void {
      this.messages = [];
    },
  },
  mounted() {
    //сообщение об ошибки можно передать через сторр с других страниц
    /*   const loginMessage: string | null = Cookies.get('login-message');
    if (loginMessage != null) {
      this.messages.push({ severity: 'error', content: loginMessage, id: 1 });
      Cookies.delete('login-message');
    } */
    //TODO: Вырезать эту логику
    Cookies.delete('login-message');
  },
});
