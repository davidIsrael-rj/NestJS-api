import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports:
        [JwtModule.register({
            secret: "!^Kt1:}jtz,.}}4~4Uhmi;U_T#pnA>n1"
        }),
            UserModule,
            PrismaModule
        ],
    controllers: [AuthController]
})
export class AuthModule {

}