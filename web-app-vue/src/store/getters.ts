import { UserDto } from '@/interfaces/swagger/userDto';
import { IRootState } from '.';

export enum Getters {
  currentUser = 'currentUser',
  isAuthenticated = 'isAuthenticated',
}

export type GettersTypes = {
  isAuthenticated: (state: IRootState) => boolean;
  currentUser: (state: IRootState) => UserDto | null;
};
