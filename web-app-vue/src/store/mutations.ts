import { UserDto } from '@/interfaces/swagger/userDto';
import { IRootState } from '.';

export enum MutationTypes {
  LOGOUT = 'logout',
  SET_CURRENT_USER = 'setCurrentUser',
}

export type Mutations = {
  [MutationTypes.LOGOUT](state: IRootState): void;
  [MutationTypes.SET_CURRENT_USER](state: IRootState, data: { user: UserDto; isSession: false });
};
