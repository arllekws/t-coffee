import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { CreationAttributes } from 'sequelize';
import { UpdateProductDto } from './dtos/update-product.dto';


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

    async remove(id: string): Promise<{ message: string }> {
        const deleted = await this.productModel.destroy({ where: { productId: id } });

    if (deleted === 0) {
        return { message: `Produto com id ${id} não encontrado` };
    }

    return { message: `Produto com id ${id} deletado com sucesso` };
        }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<Products> {
    const product = await this.productModel.findByPk(id);

    if (!product) {
      throw new NotFoundException(`Produto com id ${id} não encontrado`);
    }

    // Convert price to string if it exists
    const updateData = {
      ...updateProductDto,
      price: updateProductDto.price !== undefined ? Number(updateProductDto.price) : undefined,
    };
    await product.update(updateData);
    return product;
  }
}