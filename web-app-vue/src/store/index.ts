import { LoginOutDto } from '@/interfaces/swagger/loginOutDto';
import { UserDto } from '@/interfaces/swagger/userDto';
import { createStore, GetterTree, MutationTree } from 'vuex';
import { Getters, GettersTypes } from './getters';
import { Mutations, MutationTypes } from './mutations';
import { storeModules } from './store-manager/store.modules';

export interface IRootState {
  currentUser: LoginOutDto | null;
  token: string;
}

const state: IRootState = {
  token: localStorage.getItem('user-token') || sessionStorage.getItem('user-token') || '',
  currentUser: (JSON.parse(localStorage.getItem('user')!) as UserDto) || (JSON.parse(sessionStorage.getItem('user')!) as UserDto) || null,
};

const getters: GetterTree<IRootState, IRootState> & GettersTypes = {
  [Getters.isAuthenticated]: (state: IRootState) => !!state.currentUser?.token,
  [Getters.currentUser]: (state: IRootState) => state.currentUser,
};

const mutations: MutationTree<IRootState> & Mutations = {
  [MutationTypes.LOGOUT](state: IRootState) {
    localStorage.removeItem('user-token');
    localStorage.removeItem('user');
    state.token = '';
    state.currentUser = null;
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
    //TODO: сделать нормально. Нам хватит обычного пуша, тк страниц не много
  },
  [MutationTypes.SET_CURRENT_USER](state: IRootState, data: { user: LoginOutDto; isSession: false }) {
    const setUser = JSON.stringify(data.user);
    if (!data.isSession) {
      localStorage.setItem('user', setUser);
      localStorage.setItem('user-token', data.user!.token!);
    } else {
      sessionStorage.setItem('user', setUser);
      sessionStorage.setItem('user-token', data.user!.token!);
    }
    state.currentUser = data.user;
  },
};

const store = createStore({
  state: state,
  getters: getters,
  actions: {},
  mutations: mutations,
  modules: storeModules,
});

export default store;
