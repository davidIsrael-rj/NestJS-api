import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserServiceMock } from "../testing/user-service.mock";
import { AuthGuard } from "../guards/auth.guard";
import { guardMOck } from "../testing/guard.mock";
import { RoleGuard } from "../guards/role.guard";
import { UserService } from "./user.service";
import { createUserDTO } from "../testing/create-user-dto.mock";
import { userEntityList } from "../testing/user-entity-list.mock";

describe('UserController', () => {

    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserServiceMock]
        })
        .overrideGuard(AuthGuard)
        .useValue({guardMOck})
        .overrideGuard(RoleGuard)
        .useValue({guardMOck})
        .compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
    });

    test('Validar a definição', () => {
        expect(userController).toBeDefined();
        expect(userService).toBeDefined();
    });

    describe('Create', () =>{
        test('create method', async () => {
            const result = await userController.create(createUserDTO);

            expect(result).toEqual(userEntityList[0]);
        });
    });

    describe('Read', () =>{
        test('list method', async () => {
            const result = await userController.list();

            expect(result).toEqual(userEntityList);
        });

        test('show method', async () => {
            const result = await userController.readOne(1);

            expect(result).toEqual(userEntityList[0]);
        });
    });
});