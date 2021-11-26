import Api from '@/client-api/api';
import { LoginInDto } from '@/interfaces/swagger/loginInDto';
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
    return Api.instance.postAsync<UserDto>(route, data);
  },
  [UsersAction.get_users]({ state: IStateUsersTypes }) {
    const route = `/Users/Users`;
    return Api.instance.getAsync<UserDto[]>(route);
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
