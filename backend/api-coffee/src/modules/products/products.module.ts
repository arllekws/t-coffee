import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {  SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.entity';
import { OrderItem } from '../order-items/order-items.entity';

@Module({
  imports: [SequelizeModule.forFeature([Products,OrderItem])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
