import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemsDto } from './dtos/create-OrderItems.dto';

@Controller('order-items')
export class OrderItemsController {
    constructor (private readonly orderItemsService: OrderItemsService) {}

    @Post()
    async create(@Body() createOrderItemDto: CreateOrderItemsDto) {
        return await this.orderItemsService.create(createOrderItemDto);
    }

    @Get()
    async findall(){
        return await this.orderItemsService.findAll();
    }
}
