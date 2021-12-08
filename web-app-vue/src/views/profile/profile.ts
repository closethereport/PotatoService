import Api from '@/client-api/api';
import { mapActionsNamespaced, mapGettersRoot } from '@/helpers/typedMappers.helper';
import { useVuelidate } from '@vuelidate/core';
import AlterUserDto from '@/interfaces/local-Interfaces/alterUserDto';
import { LoginOutDto } from '@/interfaces/swagger/loginOutDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import store from '@/store';
import { Getters, GettersTypes } from '@/store/getters';
import { UsersAction, UsersActionType } from '@/store/modules/users/users.actions';
import { MutationTypes } from '@/store/mutations';
import { storeModule } from '@/store/store-manager/store.constants';
import { defineComponent } from 'vue';
import { required } from '@vuelidate/validators';

export default defineComponent({
  validations() {
    return {};
  },
  data() {
    return {
      v$: useVuelidate(), //валидация полей по правилиам выше
      group: 'IKPI-83',
      faculty: 'Software Engineering',
      isRememberMe: true,
      messages: [] as any[], //сообщения пользователю об ошибке
      user: [] as UserDto,
      alterUserDto: [] as unknown as AlterUserDto,
      isEnableAlterButton: true,
    };
  },
  components: {},
  computed: { ...mapGettersRoot<GettersTypes>()([Getters.currentUser]) },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    ...mapActionsNamespaced<UsersActionType>()(storeModule.Users, [UsersAction.get_user_by_id, UsersAction.alter_user, UsersAction.login]),
    handleSubmit(isFormValid): void {
      if (!isFormValid) {
        return;
      }
      this.getUserProfile();
    },

    getUserProfile(): void {
      this.hideAlert();
      if (this.currentUser?.id)
        this.get_user_by_id(this.currentUser.id).then(({ data, status }: { data: string | UserDto; status: number }) => {
          if (status != 200) {
            //если статус код ответа хуеый - выводим сообщение пользователю
            this.showAlert(data as string);
          } else {
            let user = data as UserDto;
            this.user = user;
          }
        });
    },

    AlterUser(): void {
      this.alterUserDto = this.user as AlterUserDto;
      this.isEnableAlterButton = false;
      if (this.alterUserDto.oldPassword == null) {
        this.alterUserDto.oldPassword = this.user?.password ?? '';
      }
      this.hideAlert();
      this.alterUserDto.oldPassword;
      if (this.currentUser?.id)
        this.alter_user(this.alterUserDto).then(({ data, status }: { data: string | UserDto; status: number }) => {
          if (status != 200) {
            //если статус код ответа хуеый - выводим сообщение пользователю
            this.showAlert(data as string);
          } else {
            this.loginIn();
          }
        });
    },

    loginIn(): void {
      this.hideAlert();

      this.alterUserDto.oldPassword;

      //отправка запроса к сервера на авторизацию
      this.authorization({
        login: this.user.login ?? '',
        password: this.alterUserDto.oldPassword,
      }).then(({ data, status }: { data: string | LoginOutDto; status: number }) => {
        this.processLoginResult({ data, status });
      });
    },
    //обработка ответа от сервера
    processLoginResult({ data, status }: { data: any | LoginOutDto; status: number }): void {
      if (status != 200) {
        //если статус код ответа хуеый - выводим сообщение пользователю
        this.showAlert(data as string);
        this.isEnableAlterButton = true;
      } else {
        //все гуд, авторизация прошла
        const user = data as LoginOutDto;
        this.hideAlert();
        const dateExpire = new Date();
        const nextYear = dateExpire.getFullYear() + 1;
        dateExpire.setFullYear(nextYear);
        store.commit(MutationTypes.SET_CURRENT_USER, { user: user, isSession: this.isRememberMe });
        Api.instance.authorize(user.token!);
        this.isEnableAlterButton = true;
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
});
