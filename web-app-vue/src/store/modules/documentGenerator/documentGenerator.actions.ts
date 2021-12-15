import ApiRequestResult from '@/interfaces/local-Interfaces/api-request-result';
import { DocumentGeneratorDto } from '@/interfaces/swagger/documentGeneratorDto';
import { TemplateInfoDto } from '@/interfaces/swagger/templateInfoDto';
import { IRootState } from '@/store';
import { ActionContext } from 'vuex';
import { IStateDocumentGeneratorTypes } from './documentGenerator';

export enum DocumentGeneratorAction {
  generate = 'generate',
}

export type DocumentGeneratorActionType = {
  [DocumentGeneratorAction.generate]: (
    context: ActionContext<IStateDocumentGeneratorTypes, IRootState>,
    loginIn: DocumentGeneratorDto
  ) => Promise<ApiRequestResult<any>>;
};
