import { forwardRef, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserIsCheckMiddleware } from "src/middleware/user-id-check-middleware";
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";

@Module({
    imports: [
         forwardRef(() => AuthModule),
         TypeOrmModule.forFeature([UserEntity])
        ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIsCheckMiddleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL

        })
    }
}