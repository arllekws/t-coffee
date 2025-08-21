import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { DatabaseModule } from './database/database.module';
import { PaymentMethodModule } from './modules/payment-method/payment-method.module';
import { AdressModule } from './modules/adress/adress.module';
import { UserModule } from './modules/user/user.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [UserModule, 
            ProductsModule, 
            DatabaseModule, 
            PaymentMethodModule, 
            AdressModule, 
            OrderItemsModule,
            OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
