import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

import { createOrderDto } from './dtos/create-order.dto';

@Controller('order')
export class OrderController {
    constructor (private readonly orderService: OrderService) {}

    @Post()
    async create(@Body() createOrderDto: createOrderDto) {
        return await this.orderService.create(createOrderDto);
    }
        
    @Get("findall")
    async findAll() {
        return await this.orderService.findAll();
    }
}
