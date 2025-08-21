import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Orders } from './order.entity';

@Module({
  imports: [SequelizeModule.forFeature([Orders])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
