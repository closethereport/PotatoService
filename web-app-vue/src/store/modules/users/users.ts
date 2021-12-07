import Api from '@/client-api/api';
import { LoginInDto } from '@/interfaces/swagger/loginInDto';
import { LoginOutDto } from '@/interfaces/swagger/loginOutDto';
import { RegisterDto } from '@/interfaces/swagger/registerDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import { IRootState } from '@/store';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { UsersAction } from './users.actions';
import { UsersGettersTypes } from './users.getters';
import { UsersMutationTypes } from './users.mutations';

export interface IStateUsersTypes {}

const state: IStateUsersTypes = {};

const getters: GetterTree<IStateUsersTypes, IRootState> & UsersGettersTypes = {};

const mutations: MutationTree<IStateUsersTypes> & UsersMutationTypes = {};

const actions: ActionTree<IStateUsersTypes, IRootState> = {
  [UsersAction.login]({ state: IStateUsersTypes }, data: LoginInDto) {
    const route = `/Users/login`;
    return Api.instance.postAsync<LoginOutDto>(route, data);
  },
  [UsersAction.register]({ state: IStateUsersTypes }, register: RegisterDto) {
    const route = `/Users/Register`;
    return Api.instance.postAsync<UserDto>(route, register);
  },
  [UsersAction.get_all_users]({ state: IStateUsersTypes }) {
    const route = `/Users/GetAllUsers`;
    return Api.instance.getAsync<UserDto[]>(route);
  },
  [UsersAction.get_user_by_id]({ state: IStateUsersTypes }, userId: number) {
    const route = `/Users/GetUser?id=${userId}`;
    return Api.instance.getAsync<UserDto>(route);
  },
  [UsersAction.alter_user]({ state: IStateUsersTypes }, userDto: UserDto) {
    const route = `/Users/AlterUser`;
    return Api.instance.putAsync<UserDto>(route, userDto);
  },
  [UsersAction.delate_user_by_id]({ state: IStateUsersTypes }, userId: number) {
    const route = `/Users/DeleteUser?id=${userId}`;
    return Api.instance.deleteAsync<void>(route);
  },
};

const UsersModule: Module<IStateUsersTypes, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default UsersModule;
