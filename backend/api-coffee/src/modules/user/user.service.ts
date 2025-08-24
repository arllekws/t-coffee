import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly UserModel: typeof User
    ){}

    async create(userDto: CreateUserDto): Promise<User> {
        const createUser = await this.UserModel.create(userDto as unknown as CreationAttributes<User>);
        return createUser;
    }

    async findAll(){
        return await this.UserModel.findAll();
    }
}
