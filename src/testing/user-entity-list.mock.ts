import { Role } from "../enums/role.enum";
import { UserEntity } from "../user/entity/user.entity";

export const userEntityList: UserEntity[] =[{
    name:'david',
    email:'david@admin.br.com',
    birthAt:new Date('2000-01-01'),
    id:1,
    password:'$2b$10$m5fGT7UbEq4S17PJSxa3eO.YbCQfBn4kgVeXmN/yJrJEDh5qYUcUe',
    role:Role.Admin,
    createdAt:new Date(),
    updatedAt: new Date(),
},{
    name:'Maria Claudia',
    email:'maria@admin.com.br',
    birthAt:new Date('2000-01-01'),
    id:2,
    password:'$2b$10$m5fGT7UbEq4S17PJSxa3eO.YbCQfBn4kgVeXmN/yJrJEDh5qYUcUe',
    role:Role.Admin,
    createdAt:new Date(),
    updatedAt: new Date(),
},{
    name:'Gustarina',
    email:'gustarina@admin.com.br',
    birthAt:new Date('2000-01-01'),
    id:3,
    password:'$2b$10$m5fGT7UbEq4S17PJSxa3eO.YbCQfBn4kgVeXmN/yJrJEDh5qYUcUe',
    role:Role.Admin,
    createdAt:new Date(),
    updatedAt: new Date(),
}]