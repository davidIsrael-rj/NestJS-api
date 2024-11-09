import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2000-01-01',
  email: 'david@admin.br.com',
  name: 'david',
  password: '123456',
  role: Role.Admin,
};
