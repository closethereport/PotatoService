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
      login: 'ffffffff',
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
  mounted() {
    this.fillUserProfile();
  },
  methods: {
    ...mapActionsNamespaced<UsersActionType>()(storeModule.Users, [UsersAction.get_user_by_id, UsersAction.alter_user]),
    handleSubmit(isFormValid): void {
      if (!isFormValid) {
        return;
      }
      this.getUserProfile();
    },

    fillUserProfile(): void {
      this.login = this.currentUser?.login ?? '';
      this.email = this.currentUser?.email ?? '';
      this.full_name = this.currentUser?.fullName ?? '';
    },

    getUserProfile(): void {
      const component = this;
      this.hideAlert();
      if (this.currentUser?.id)
        this.get_user_by_id(this.currentUser.id).then(({ data, status }: { data: string | UserDto; status: number }) => {
          if (status != 200) {
            //если статус код ответа хуеый - выводим сообщение пользователю
            this.showAlert(data as string);
          } else {
            let user = data as UserDto;

            this.login = user?.login ?? '';
            this.email = user?.email ?? '';
            this.full_name = user?.fullName ?? '';
          }
        });
    },

    showAlert(message: string): void {
      this.messages = [{ severity: 'error', content: message, id: 1 }];
    },
    hideAlert(): void {
      this.messages = [];
    },
  },
});
