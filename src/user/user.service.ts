import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import * as bcrypt from 'bcrypt';
import { Repository } from "typeorm";
import { UserEntity } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>
    ) { }

    async create(data: CreateUserDTO) {

        if(await this.usersRepository.exist({
            where:{
                email: data.email
            }
        })){
            throw new BadRequestException('Este e-mail já esta sendo usado.');
        }

        const salt = await bcrypt.genSalt();

        console.log({ salt })

        data.password = await bcrypt.hash(data.password, salt)
        
        const user = this.usersRepository.create(data);

         return this.usersRepository.save(user);
    }

    async list() {
        return this.usersRepository.find();
    }

    async show(id: number) {

        await this.exists(id);

        return this.usersRepository.findOneBy({
                id
        });
    }

    async update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDTO) {

        await this.exists(id);

        password = password;

        const salt = await bcrypt.genSalt();

        console.log({ salt })

        password = await bcrypt.hash(password, salt)

        await this.usersRepository.update(id,{
             email,
             name,
             password,
             birthAt: birthAt ? new Date(birthAt) : null,
              role 
            });
            return this.show(id);
    }
    async updatePartial(id: number, data: UpdatePatchUserDTO) {

        await this.exists(id);

        if (data.password) {
            data.password = data.password;

            const salt = await bcrypt.genSalt();

            data.password = await bcrypt.hash(data.password, salt)
        }
        await this.usersRepository.update(id,data)

        return this.show(id);
    }

    async delete(id: number) {

        const dados = await this.show(id);
        
        await this.exists(id);

        await this.usersRepository.delete(id);

        return true;
    }

    async exists(id: number) {
        if (!(await this.usersRepository.exist({
            where: {
                id
            }
        }))) {
            throw new NotFoundException(`O usuário ${id} não existe.`);
        }
    }

}