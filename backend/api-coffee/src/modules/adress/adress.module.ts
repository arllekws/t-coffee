import { Module } from '@nestjs/common';
import { AdressService } from './adress.service';
import { AdressController } from './adress.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import {Address} from '../adress/adress.entity'

@Module({
  imports: [SequelizeModule.forFeature([Address])],
  providers: [AdressService],
  controllers: [AdressController]
})
export class AdressModule {}
