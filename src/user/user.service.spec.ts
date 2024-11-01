import * as dotenv from 'dotenv';
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { userRepositoryMock } from "../testing/user-repository.mock";
import { userEntityList } from "../testing/user-entity-list.mock";
import { createUserDTO } from "../testing/create-user-dto.mock";
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

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

    describe('Update', () => { })
    describe('Delete', () => { })

});