import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Orders } from './order.entity';
import { createOrderDto } from './dtos/create-order.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Orders)
        private readonly OrderModel: typeof Orders
    ){}

    async create(createOrderDto: createOrderDto): Promise<Orders>{
        const createOrder = await this.OrderModel.create(createOrderDto as unknown as CreationAttributes<Orders>)
        return createOrder;
    }

    async findAll(){
        return await this.OrderModel.findAll();
    }


}
