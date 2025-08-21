import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './order-items.entity';

@Module({
  imports:[SequelizeModule.forFeature([OrderItem])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService]
})
export class OrderItemsModule {}
