import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

const a = 'ola'
@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body: CreateUserDTO) {
        return { body };
    }

    @Get('')
    async read() {
        return { users: [{ 'name': 'David' }] }
    }

    @Get(':id')
    async readOne(@Param() param) {
        return { user: {}, param }
    }

    @Put(':id')
    async update(@Body() body: UpdatePutUserDTO, @Param() param) {
        return {
            method: 'put',
            body,
            param
        }
    }

    @Patch(':id')
    async updateParcial(@Body() body: UpdatePatchUserDTO, @Param() param) {
        return {
            method: 'patch',
            body,
            param
        }
    }

    @Delete(':id')
    async delete(@Param() param){
        return {
            param,
            a 
        }
    }

}