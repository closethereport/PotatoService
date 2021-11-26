import ApiRequestResult from '@/interfaces/local-Interfaces/api-request-result';
import { LoginInDto } from '@/interfaces/swagger/loginInDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import { IRootState } from '@/store';
import { ActionContext } from 'vuex';
import { IStateUsersTypes } from './users';

export enum UsersAction {
  login = 'authorization',
  register = 'register',
  alter_user = 'alter_user',
  get_user_by_id = 'get_user_by_id',
  delate_user_by_id = 'delate_user_by_id',
  get_users = 'get_users',
}

export type UsersActionType = {
  /* [UsersAction.login]: (context: ActionContext<IStateUsersTypes, IRootState>) => Promise<ApiRequestResult<UserDto>>; */
  [UsersAction.login]: (context: ActionContext<IStateUsersTypes, IRootState>, loginIn: LoginInDto) => Promise<ApiRequestResult<UserDto>>;
};
