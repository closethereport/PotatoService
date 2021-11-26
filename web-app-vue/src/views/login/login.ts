import Api from '@/client-api/api';
import Cookies from '@/helpers/cookies';
import { mapActionsNamespaced } from '@/helpers/typedMappers.helper';
import { UserDto } from '@/interfaces/swagger/userDto';
import store from '@/store';
import { UsersAction, UsersActionType } from '@/store/modules/users/users.actions';
import { MutationTypes } from '@/store/mutations';
import { storeModule } from '@/store/store-manager/store.constants';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { defineComponent } from 'vue';

export default defineComponent({
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
      v$: useVuelidate(),
      login: '',
      password: '',
      isRememberMe: false,
      messages: [] as any[],
      loginButton: true,
    };
  },
  methods: {
    ...mapActionsNamespaced<UsersActionType>()(storeModule.Users, [UsersAction.login]),

    handleSubmit(isFormValid): void {
      if (!isFormValid) {
        return;
      }

      this.loginIn();
    },
    loginIn(): void {
      const component = this;
      this.hideAlert();
      component.loginButton = false;
      this.authorization({
        login: component.login,
        password: component.password,
      }).then(({ data, status }: { data: string | UserDto; status: number }) => {
        this.processLoginResult({ data, status });
      });
    },
    processLoginResult({ data, status }: { data: any | UserDto; status: number }): void {
      if (status != 200) {
        this.showAlert(data.message ?? data);
        this.loginButton = true;
      } else {
        const user = data as UserDto;
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
    const loginMessage: string | null = Cookies.get('login-message');
    if (loginMessage != null) {
      this.messages.push({ severity: 'error', content: loginMessage, id: 1 });
      Cookies.delete('login-message');
    }
  },
});
