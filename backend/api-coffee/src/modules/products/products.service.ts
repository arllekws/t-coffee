import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { CreationAttributes } from 'sequelize';


@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Products)
        private readonly productModel: typeof Products
    ) {}

    async create(productDto: CreateProductDto): Promise<Products> {
        const createProduct = await this.productModel.create(productDto as unknown as CreationAttributes<Products>);
        return createProduct;
    }

    async findAll(){
        return await this.productModel.findAll();
    }
}