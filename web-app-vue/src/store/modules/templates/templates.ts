import Api from '@/client-api/api';
import { TemplateInfoDto } from '@/interfaces/swagger/templateInfoDto';
import { IRootState } from '@/store';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { TemplatesAction } from './templates.actions';
import { TemplatesGettersTypes } from './templates.getters';
import { TemplatesMutationTypes } from './templates.mutations';

export interface IStateTemplatesTypes {}

const state: IStateTemplatesTypes = {};

const getters: GetterTree<IStateTemplatesTypes, IRootState> & TemplatesGettersTypes = {};

const mutations: MutationTree<IStateTemplatesTypes> & TemplatesMutationTypes = {};

const actions: ActionTree<IStateTemplatesTypes, IRootState> = {
  [TemplatesAction.Add]({ state: IStateTemplatesTypes }, data: TemplateInfoDto) {
    return Api.instance.postAsync<TemplateInfoDto>(`/Templates/Add`, data);
  },
  [TemplatesAction.Get_All_Templates]({ state: IStateTemplatesTypes }) {
    return Api.instance.getAsync<TemplateInfoDto[]>(`/Templates/GetAllTemplates`);
  },
  [TemplatesAction.Get_Templates_By_User_Id]({ state: IStateTemplatesTypes }, userId: number) {
    return Api.instance.getAsync<TemplateInfoDto[]>(`/Templates/GetTemplatesByUserId?id=${userId}`);
  },
  [TemplatesAction.Get_Template]({ state: IStateTemplatesTypes }, templateId: number) {
    return Api.instance.getAsync<TemplateInfoDto>(`/Templates/GetTemplate?id=${templateId}`);
  },
  [TemplatesAction.Alter_Template]({ state: IStateTemplatesTypes }, data: TemplateInfoDto) {
    return Api.instance.putAsync<void>(`/Templates/AlterTemplate`, data);
  },
  [TemplatesAction.Delete_Template]({ state: IStateTemplatesTypes }, id: number) {
    return Api.instance.deleteAsync<void>(`/Templates/DeleteTemplate?id=${id}`);
  },
};

const TemplatesModule: Module<IStateTemplatesTypes, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default TemplatesModule;
