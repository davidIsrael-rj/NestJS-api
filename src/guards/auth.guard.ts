import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly authService: AuthService) {}

    canActivate(context: ExecutionContext){

        const {authorization} = context.switchToHttp().getRequest().headers;

        console.log({authorization});

        return this.authService.isValidToken((authorization ?? '').split(' ')[1]);

        
    }
}