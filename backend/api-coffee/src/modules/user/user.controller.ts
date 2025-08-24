import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';import { CreateUserDto } from './dtos/create-user.dto';


@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
        async create(@Body() createUserDto: CreateUserDto) {
            return await this.userService.create(createUserDto);
    }

    @Get("findall")
    async findAll() {
        return await this.userService.findAll();
    }
}
