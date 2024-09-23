import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

const a = 'ola'
@Controller('users')
export class UserController {

    constructor(private readonly userService : UserService){}

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }

    @Get()
    async list() {
        return this.userService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.show(id)
    }

    @Put(':id')
    async update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'put',
            body,
            id
        }
    }

    @Patch(':id')
    async updateParcial(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'patch',
            body,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return {
            id,
            a 
        }
    }

}