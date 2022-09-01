import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsSchema } from './schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Products',
        schema: ProductsSchema,
      },
    ]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
