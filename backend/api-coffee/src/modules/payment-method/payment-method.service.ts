import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './payment-method.entity';
import { CreatePaymentMethodDto } from './dtos/create-address.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectModel(PaymentMethod)
            private readonly paymentModel: typeof PaymentMethod
    ) {}

    async create(CreatePaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod> {
        const createPM = await this.paymentModel.create(CreatePaymentMethodDto as unknown as CreationAttributes<PaymentMethod>);
        return createPM;
    }
    async findAll(){
        return await this.paymentModel.findAll();
    }
}
