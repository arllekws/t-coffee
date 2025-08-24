import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAddressDto } from './dtos/create-address.dto';

@Controller('adress')
export class AdressController {
    constructor (private readonly adressService: AdressService) {}
    
    @Post()
    async create(@Body() createAddressDto: CreateAddressDto) {
        return await this.adressService.create(createAddressDto);
    }

    @Get("findall")
    async findAll() {
        return await this.adressService.findAll();
    }

}