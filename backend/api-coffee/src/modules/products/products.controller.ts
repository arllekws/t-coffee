import { Body, Post, Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor (private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return await this.productsService.create(createProductDto);
}
}