import { UserService } from "../user/user.service";

export const UserServiceMock = {

    provide: UserService,
    useValue: {
       show: jest.fn(),
       create: jest.fn(),
       list: jest.fn(),
       update: jest.fn(),
       updateParcial: jest.fn(),
       delete: jest.fn(),
       exists: jest.fn(),
    }
}
