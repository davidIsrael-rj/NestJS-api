import { Controller, Post, Body, Get, Put, Patch, Delete, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { ParamId } from "src/decorators/param-id.decorator";
import { Role } from "src/enums/role.enum";
import { Roles } from "src/decorators/roles.decorator";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/guards/auth.guard";

const a = 'ola'

@Roles(Role.Admin)
@UseGuards(AuthGuard ,RoleGuard)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }
    
    @Get()
    async list() {
        return this.userService.list()
    }
    
    @Get(':id')
    async readOne(@ParamId() id: number) {
        console.log({ id })
        return this.userService.show(id)
    }
    
    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
        return this.userService.update(id, data)
    }
    
    @Patch(':id')
    async updateParcial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
        return this.userService.updatePartial(id, data)
    }
    
    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.userService.delete(id)
    }

}