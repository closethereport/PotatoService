import store from '../store';
import { MutationTypes } from '@/store/mutations';
import { UserDto } from '@/interfaces/swagger/userDto';

export default class Authorization {
  /*   static getCurrentUserToken(): string | null {
    const currentUser = store.getters.currentUser as UserDto;
    const token = currentUser.token as string;
    return token;
  } */

  static logout(): void {
    store.commit(MutationTypes.LOGOUT);
  }
}
