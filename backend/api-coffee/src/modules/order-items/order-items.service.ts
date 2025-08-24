import { Injectable } from '@nestjs/common';
import { OrderItem } from './order-items.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreationAttributes } from 'sequelize';
import { CreateOrderItemsDto } from './dtos/create-OrderItems.dto';

@Injectable()
export class OrderItemsService {
constructor(
    @InjectModel(OrderItem)
        private readonly OrderItemModel: typeof OrderItem
    ) {}

    async create(createOrderItemsDto: CreateOrderItemsDto): Promise<OrderItem> {
        const createOrderItem = await this.OrderItemModel.create(createOrderItemsDto as unknown as CreationAttributes<OrderItem>);
        return createOrderItem;
    }
    async findAll(){
         return await this.OrderItemModel.findAll();
    }
}
