import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsDTO } from './dto/products.dto';
import { IProducts } from './interfaces/products.interfaces';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productsModel: Model<IProducts>,
  ) {}

  async getProducts(): Promise<IProducts[]> {
    const products = await this.productsModel.find();
    return products;
  }

  async getProduct(id: string): Promise<IProducts> {
    const product = await this.productsModel.findById(id);
    return product;
  }

  async createProduct(createProductDTO: ProductsDTO): Promise<IProducts> {
    const product = new this.productsModel(createProductDTO);
    return await product.save();
  }

  async updateProduct(
    id: string,
    updateProduct: ProductsDTO,
  ): Promise<IProducts> {
    const update = await this.productsModel.findByIdAndUpdate(
      id,
      updateProduct,
      { new: true },
    );
    return update;
  }

  async deleteProduct(id: string): Promise<IProducts> {
    const deleteProduct = await this.productsModel.findByIdAndDelete(id);
    return deleteProduct;
  }
}
