import ApiRequestResult from '@/interfaces/local-Interfaces/api-request-result';
import { TemplateInfoDto } from '@/interfaces/swagger/templateInfoDto';
import { IRootState } from '@/store';
import { ActionContext } from 'vuex';
import { IStateTemplatesTypes } from './templates';

export enum TemplatesAction {
  Add = 'Templates_Add',
  Get_All_Templates = 'Get_All_Templates',
  Get_Templates_By_User_Id = 'Get_Templates_By_User_Id',
  Get_Template = 'Get_Template',
  Alter_Template = 'Alter_Template',
  Delete_Template = 'Delete_Template',
}

export type TemplatesActionType = {
  [TemplatesAction.Add]: (
    context: ActionContext<IStateTemplatesTypes, IRootState>,
    TemplateInfo: TemplateInfoDto
  ) => Promise<ApiRequestResult<TemplateInfoDto>>;

  [TemplatesAction.Get_All_Templates]: (context: ActionContext<IStateTemplatesTypes, IRootState>) => Promise<ApiRequestResult<TemplateInfoDto[]>>;

  [TemplatesAction.Get_Templates_By_User_Id]: (
    context: ActionContext<IStateTemplatesTypes, IRootState>,
    userId: number
  ) => Promise<ApiRequestResult<TemplateInfoDto[]>>;

  [TemplatesAction.Get_Template]: (
    context: ActionContext<IStateTemplatesTypes, IRootState>,
    templateId: number
  ) => Promise<ApiRequestResult<TemplateInfoDto>>;

  //TODO: Alter_Template и Delete_Template
};
