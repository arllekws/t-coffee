import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './order-items.entity';
import { Orders } from '../order/order.entity';
import { Products } from '../products/products.entity';

@Module({
  imports:[SequelizeModule.forFeature([Orders,OrderItem, Products])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService]
})
export class OrderItemsModule {}
