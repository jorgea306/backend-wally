import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsDTO } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts(@Res() res: Response) {
    const products = await this.productsService.getProducts();
    return res.status(HttpStatus.OK).json({
      products,
    });
  }

  @Get(':id')
  async getProduct(@Res() res: Response, @Param('id') id: string) {
    const product = await this.productsService.getProduct(id);
    if (!product) throw new NotFoundException('Producto no existe');
    res.status(HttpStatus.OK).json({
      product,
    });
  }

  @Post()
  async createProduct(@Res() res, @Body() createProductDTO: ProductsDTO) {
    const product = await this.productsService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      menssage: 'Creado',
      product,
    });
  }

  @Delete(':id')
  async deleteProduct(@Res() res: Response, @Param('id') id: string) {
    const product = await this.productsService.deleteProduct(id);
    if (!product) throw new NotFoundException('Producto no existe');
    res.status(HttpStatus.OK).json({
      menssage: 'Producto eliminado',
      product,
    });
  }

  @Put(':id')
  async updateProduct(
    @Res() res: Response,
    @Body() updateProduct: ProductsDTO,
    @Param('id') id: string,
  ) {
    const update = await this.productsService.updateProduct(id, updateProduct);
    if (!update) throw new NotFoundException('Producto no existe');
    res.status(HttpStatus.OK).json({
      menssage: 'Product actualizado',
      update,
    });
  }
}
