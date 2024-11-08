import * as dotenv from 'dotenv';
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { userRepositoryMock } from "../testing/user-repository.mock";
import { userEntityList } from "../testing/user-entity-list.mock";
import { createUserDTO } from "../testing/create-user-dto.mock";
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { updatePutUserDTO } from '../testing/update-put-user-dto.mock';
import { updatePatchUserDTO } from '../testing/update-patch-user-dto.mock';
import { UserController } from './user.controller';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';

dotenv.config();

describe('UserService', () => {

    let userService: UserService;
    let userRepository: Repository<UserEntity>

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                userRepositoryMock
            ]
        }).compile();

        userService = module.get<UserService>(UserService);
        userRepository = module.get(getRepositoryToken(UserEntity))

    });

    test('Validar a definição', () => {
        expect(userService).toBeDefined();
        expect(userRepository).toBeDefined();
    });

    describe('Teste da aplicação dos Guards neste controle', () => {
        test('Se os guards estão aplicados', () => {
            const guards = Reflect.getMetadata('__guards__', UserController);

            expect(guards.length).toEqual(2);
            expect(new guards[0]()).toBeInstanceOf(AuthGuard);
            expect(new guards[1]()).toBeInstanceOf(RoleGuard);
        });
    });

   
    describe('Create', () => {

        test('method create', async () => {

            jest.spyOn(userRepository,'exist').mockResolvedValueOnce(false);

            const result = await userService.create(createUserDTO);

            expect(result).toEqual(userEntityList[0]);
        });

    });

    describe('Read', () => {
        test('method list', async () => {
            const result = await userService.list();

            expect(result).toEqual(userEntityList);
        });

        test('method show', async () => {
            const result = await userService.show(1);

            expect(result).toEqual(userEntityList[0]);
        })
    });

    describe('Update', () => { 

        test('method update', async ()=>{
            const result = await userService.update(1, updatePutUserDTO);

            expect(result).toEqual(userEntityList[0]);
        });

        test('method updateParcial', async ()=>{
            const result = await userService.updatePartial(1, updatePatchUserDTO);

            expect(result).toEqual(userEntityList[0]);
        });
    })
    describe('Delete', () => {
        
        test('delete method', async ()=>{

            const result = await userService.delete(1);
            console.log(result)
            expect(result).toEqual(true)
        })
     })

});