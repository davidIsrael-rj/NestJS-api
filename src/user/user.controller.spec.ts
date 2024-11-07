import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserServiceMock } from "../testing/user-service.mock";
import { AuthGuard } from "../guards/auth.guard";
import { guardMOck } from "../testing/guard.mock";
import { RoleGuard } from "../guards/role.guard";
import { UserService } from "./user.service";

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

});