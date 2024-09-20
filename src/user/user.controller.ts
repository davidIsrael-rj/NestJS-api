import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from "@nestjs/common";

const a = 'ola'
@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body) {
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
    async update(@Body() body, @Param() param) {
        return {
            method: 'patch',
            body,
            param
        }
    }

    @Patch(':id')
    async updateParcial(@Body() body, @Param() param) {
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