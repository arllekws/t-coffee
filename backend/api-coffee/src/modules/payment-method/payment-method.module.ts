import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodController } from './payment-method.controller';
import { PaymentMethod } from './payment-method.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([PaymentMethod])],
  providers: [PaymentMethodService],
  controllers: [PaymentMethodController]
})
export class PaymentMethodModule {}
