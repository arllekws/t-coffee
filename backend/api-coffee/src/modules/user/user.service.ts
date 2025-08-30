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
  // Verifica se já existe usuário com o mesmo UID
  const existingUser = await this.UserModel.findOne({
    where: { uid: userDto.uid },
  });

  if (existingUser) {
    return existingUser; // Se já existe, retorna
  }

  // Se não existe, cria
  const createUser = await this.UserModel.create(
    userDto as unknown as CreationAttributes<User>
  );
  return createUser;
}

    async findAll(){
        return await this.UserModel.findAll();
    }
}
