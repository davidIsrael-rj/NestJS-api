import { Module } from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";
import { AuthController } from "./auth.controller";

@Module({
    imports:[JwtModule.register({
        secret:"!^Kt1:}jtz,.}}4~4Uhmi;U_T#pnA>n1"
    })],
    controllers:[AuthController]
})
export class AuthModule{

}