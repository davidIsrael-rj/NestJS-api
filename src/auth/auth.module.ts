import { Module } from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[JwtModule.register({
        secret:"!^Kt1:}jtz,.}}4~4Uhmi;U_T#pnA>n1"
    })]
})
export class AuthModule{

}