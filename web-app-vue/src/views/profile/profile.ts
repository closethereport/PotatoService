import { mapActionsNamespaced, mapGettersRoot } from '@/helpers/typedMappers.helper';
import { LoginOutDto } from '@/interfaces/swagger/loginOutDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import { Getters, GettersTypes } from '@/store/getters';
import { UsersAction, UsersActionType } from '@/store/modules/users/users.actions';
import { storeModule } from '@/store/store-manager/store.constants';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      login: '',
      email: '',
      full_name: '',
      group: 'IKPI-83',
      faculty: 'Software Engineering',
      password: '',
      new_password: '',
      messages: [] as any[], //сообщения пользователю об ошибке
    };
  },
  components: {},
  computed: { ...mapGettersRoot<GettersTypes>()([Getters.currentUser]) },
  methods: {
    ...mapActionsNamespaced<UsersActionType>()(storeModule.Users, [UsersAction.get_user_by_id, UsersAction.alter_user,UsersAction.login]),
    handleSubmit(isFormValid): void {
      if (!isFormValid) {
        return;
      }
      this.getUserProfile();
    },

    fillUserProfile(): void {     
      this.login = this.currentUser?.login,
      this.email = this.currentUser?.email,
      this.full_name =this.currentUser?.fullName,
    },

    getUserProfile(): void {
      const component = this;
      this.hideAlert();

      this.get_user_by_id({ userId: this.currentUser?.id }).then(({ data, status }: { data: string | UserDto; status: number }) => {
        if (status != 200) {
          //если статус код ответа хуеый - выводим сообщение пользователю
          this.showAlert(data.message ?? data);
        } else {
          this.login = data.login ?? data;
          this.email= data.email ?? data;
          this.full_name = data.fullName ?? data;
        }
      });
    },
    AlertUserprofile(): void {
      const component = this;
      this.hideAlert();
      if (this.new_password != '') {
        this.password = this.new_password, 
      };
      this.authorization({
        login: this.login,
        password: this.password,
      }).then(({ data, status }: { data: string | LoginOutDto; status: number }) => {
        this.processLoginResult({ data, status });
      });
    },

    processLoginResult({ data, status }: { data: any | LoginOutDto; status: number }): void {
      if (status != 200) {
        //если статус код ответа хуеый - выводим сообщение пользователю
        this.showAlert(data.message ?? data);

      } else {
        //все гуд, авторизация прошла
        this.alter_user({
          fullName: this.full_name,
          email: this.email,
          password: this.password,
          

        })


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
