import { Body, Post, Controller, Get, Delete, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor (private readonly productsService: ProductsService) {}

    @Post('create')
    async create(@Body() createProductDto: CreateProductDto) {
        return await this.productsService.create(createProductDto);
}
    @Get("findall")
    async findAll() {
        return await this.productsService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.productsService.remove(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(id, updateProductDto);
    }

}