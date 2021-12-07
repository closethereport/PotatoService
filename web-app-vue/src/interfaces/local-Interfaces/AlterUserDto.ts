import { UserDto } from '../swagger/userDto';

interface AlterUserDto extends UserDto {
  oldPassword: string;
}

export default AlterUserDto;
