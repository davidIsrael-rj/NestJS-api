import { Test, TestingModule } from "@nestjs/testing"
import { AuthService } from "./auth.service"
import { userRepositoryMock } from "../testing/user-repository.mock"
import { jwtServiceMock } from "../testing/jwt-service.mock";
import { UserServiceMock } from "../testing/user-service.mock";

describe('AuthService', () =>{

    beforeEach(async ()=>{

        const module: TestingModule = await Test.createTestingModule({
           providers: [
            AuthService,
            userRepositoryMock,
            jwtServiceMock,
            UserServiceMock,
        ] 
        }).compile();
    });
});