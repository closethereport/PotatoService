import Api from '@/client-api/api';
import { DocumentGeneratorDto } from '@/interfaces/swagger/documentGeneratorDto';
import { IRootState } from '@/store';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { DocumentGeneratorAction } from './documentGenerator.actions';
import { DocumentGeneratorMutationTypes } from './documentGenerator.mutations';
import { DocumentGeneratorGettersTypes } from './documentGeneratorgetters';

export interface IStateDocumentGeneratorTypes {}

const state: IStateDocumentGeneratorTypes = {};

const getters: GetterTree<IStateDocumentGeneratorTypes, IRootState> & DocumentGeneratorGettersTypes = {};

const mutations: MutationTree<IStateDocumentGeneratorTypes> & DocumentGeneratorMutationTypes = {};

const actions: ActionTree<IStateDocumentGeneratorTypes, IRootState> = {
  [DocumentGeneratorAction.generate]({ state: IStateDocumentGeneratorTypes }, data: DocumentGeneratorDto) {
    const route = `/DocumentGenerator/Generate`;
    return Api.instance.postAsync<any>(route, data);
  },
};

const DocumentGeneratorModule: Module<IStateDocumentGeneratorTypes, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default DocumentGeneratorModule;
