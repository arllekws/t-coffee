import { Injectable } from '@nestjs/common';
import { Address } from './adress.entity';
import { InjectModel } from '@nestjs/sequelize';

import { CreateAddressDto } from './dtos/create-address.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class AdressService {
    constructor(
        @InjectModel(Address)
           private readonly addressModel: typeof Address
    ) {}

    async create(AddressDto: CreateAddressDto): Promise<Address> {
        const createAddress = await this.addressModel.create(AddressDto as unknown as CreationAttributes<Address>);
        return createAddress;
    }
    async findAll(){
        return await this.addressModel.findAll();
    }
}
