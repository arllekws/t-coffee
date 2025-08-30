import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Orders } from './order.entity';
import { createOrderDto } from './dtos/create-order.dto';
import { CreationAttributes } from 'sequelize';
import { User } from '../user/user.entity';
import { Address } from '../adress/adress.entity';
import { PaymentMethod } from '../payment-method/payment-method.entity';


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

    async findAll2() {
  return await this.OrderModel.findAll({
    include: [
      { model: User },
      { model: Address },
      { model: PaymentMethod },
    ],
  });
}


}
