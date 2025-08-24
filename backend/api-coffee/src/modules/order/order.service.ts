import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Orders } from './order.entity';

@Injectable()
export class OrderService {
constructor(
    @InjectModel(Orders)
    private readonly OrderModel: typeof Orders
){}


}
