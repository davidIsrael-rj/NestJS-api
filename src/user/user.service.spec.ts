import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";
import { userRepositoryMock } from "../testing/user-repository.mock";
import { CreateUserDTO } from "./dto/create-user.dto";
import { Role } from "../enums/role.enum";

const userEntityList: UserEntity[] =[{
    birthAt:'2000-01-01',
    email:'joao@admin.com.br',
    name:'João',
    password: '123456',
    role: Role.User
}]
describe('UserService', () => {

    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                userRepositoryMock
            ]
        }).compile();

        userService = module.get<UserService>(UserService);

    });

    test('Validar a definição', () => {

    });

    describe('Create', ()=>{

        test('method create', async()=>{
            const data:CreateUserDTO ={
                birthAt:'2000-01-01',
                email:'joao@admin.com.br',
                name:'João',
                password: '123456',
                role: Role.User
            }

            const result = await userService.create(data);

            expect(result).toEqual
        })

    })
    describe('Read', async ()=>{})
    describe('Update', async ()=>{})
    describe('Delete', async ()=>{})

});