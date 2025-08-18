import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Products } from 'src/modules/products/products.entity';

dotenv.config();
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [
        Products
      ],
      logging: false,
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
