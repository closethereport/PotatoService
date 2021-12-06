import { defineComponent } from 'vue';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { UsersAction, UsersActionType } from '@/store/modules/users/users.actions';
import { storeModule } from '@/store/store-manager/store.constants';
import { mapActionsNamespaced } from '@/helpers/typedMappers.helper';
import { UserDto } from '@/interfaces/swagger/userDto';
import { MutationTypes } from '@/store/mutations';
import store from '@/store';
import Api from '@/client-api/api';
export default defineComponent({
  validations() {
    return {
      login: {
        required,
      },
      password: {
        required,
      },
      rePassword: {
        required,
      },
      email: {
        required,
      },
    };
  },
  data() {
    return {
      v$: useVuelidate(), //валидация полей по правилиам выше
      login: '',
      password: '',
      rePassword: '',
      email: '',
      messages: [] as any[], //сообщения пользователю об ошибке
      isEnableRegisterButton: true, //включена ли кнопка кнопка регистрации
    };
  },
  components: {},
  computed: {},
  methods: {
    ...mapActionsNamespaced<UsersActionType>()(storeModule.Users, [UsersAction.register, UsersAction.login]),
    handleSubmit(isFormValid): void {
      if (!isFormValid) {
        return;
      }

      this.registration();
    },
    registration(): void {
      const component = this;
      this.hideAlert();
      component.isEnableRegisterButton = true;
      //проврка что логин и повторенный логин одинаковые
      if (this.password != this.rePassword) {
        this.showAlert("passwords don't match");
        this.rePassword = '';
        this.password = '';
      } else {
        this.register({
          login: component.login,
          password: component.password,
        }).then(({ data, status }: { data: string | UserDto; status: number }) => {
          if (status == 200) {
            this.authorization({
              login: component.login,
              password: component.password,
            }).then(({ data, status }: { data: any; status: number }) => {
              if (status != 200) {
                //если статус код ответа хуеый - выводим сообщение пользователю
                this.showAlert(data.message ?? data);
                this.isEnableRegisterButton = true;
              } else {
                //все гуд, авторизация прошла
                const user = data as UserDto;
                this.hideAlert();
                const dateExpire = new Date();
                const nextYear = dateExpire.getFullYear() + 1;
                dateExpire.setFullYear(nextYear);
                store.commit(MutationTypes.SET_CURRENT_USER, { user: user });
                Api.instance.authorize(user.token!);
                this.isEnableRegisterButton = true;
                this.$router.push('/');
              }
            });
          }
        });
      }
      //отправка запроса на сервер для проверки что пользователя с таким логином не существует
    },
    showAlert(message: string): void {
      this.messages = [{ severity: 'error', content: message, id: 1 }];
    },
    hideAlert(): void {
      this.messages = [];
    },
  },
});
