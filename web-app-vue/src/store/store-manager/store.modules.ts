import { storeNameSpace } from './imports.modules';
import { storeModule } from './store.constants';

export const storeModules = {
  [storeModule.Users]: storeNameSpace.usersModule,
};