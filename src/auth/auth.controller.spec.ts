import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthGuard } from "../guards/auth.guard";
import { guardMOck } from "../testing/guard.mock";
import { authServiceMock } from "../testing/auth-service.mock";
import { fileServiceMock } from "../testing/file-service.mock";

describe('AuthController', () => {

    let authController: AuthController;

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [authServiceMock, fileServiceMock]
        })
            .overrideGuard(AuthGuard)
            .useValue(guardMOck)
            .compile();

        authController = module.get<AuthController>(AuthController);
    });

    test('Validar a definição', () => {
        expect(authController).toBeDefined();
    })
});