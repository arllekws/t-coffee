import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { CreatePaymentMethodDto } from './dtos/create-address.dto';

@Controller('payment-method')
export class PaymentMethodController {
    constructor (private readonly payMethodService: PaymentMethodService) {}

    @Post()
    async create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
        return await this.payMethodService.create(createPaymentMethodDto);
    }
    
    @Get("findall")
    async findAll() {
        return await this.payMethodService.findAll();
    }
    
}
