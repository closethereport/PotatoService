import AlterUserDto from '@/interfaces/local-Interfaces/alterUserDto';
import ApiRequestResult from '@/interfaces/local-Interfaces/api-request-result';
import { LoginInDto } from '@/interfaces/swagger/loginInDto';
import { LoginOutDto } from '@/interfaces/swagger/loginOutDto';
import { RegisterDto } from '@/interfaces/swagger/registerDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import { IRootState } from '@/store';
import { ActionContext } from 'vuex';
import { IStateUsersTypes } from './users';

export enum UsersAction {
  login = 'authorization',
  register = 'Register',
  get_all_users = 'GetAllUsers',
  alter_user = 'alter_user',
  get_user_by_id = 'get_user_by_id',
  delate_user_by_id = 'delate_user_by_id',
}

export type UsersActionType = {
  [UsersAction.login]: (context: ActionContext<IStateUsersTypes, IRootState>, loginIn: LoginInDto) => Promise<ApiRequestResult<LoginOutDto>>;
  [UsersAction.register]: (context: ActionContext<IStateUsersTypes, IRootState>, register: RegisterDto) => Promise<ApiRequestResult<UserDto>>;
  [UsersAction.get_all_users]: (context: ActionContext<IStateUsersTypes, IRootState>) => Promise<ApiRequestResult<UserDto[]>>;
  [UsersAction.alter_user]: (context: ActionContext<IStateUsersTypes, IRootState>, userDto: AlterUserDto) => Promise<ApiRequestResult<UserDto>>;
  [UsersAction.get_user_by_id]: (context: ActionContext<IStateUsersTypes, IRootState>, userId: number) => Promise<ApiRequestResult<UserDto>>;
  [UsersAction.delate_user_by_id]: (context: ActionContext<IStateUsersTypes, IRootState>, userId: number) => Promise<ApiRequestResult<void>>;
};
