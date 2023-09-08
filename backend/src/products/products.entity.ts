import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IBaseEntity } from '../shared/base.entity';
import LowdbService from '../lowdb/lowdb.service';
export interface IProducts extends IBaseEntity {
  productId: string | number;
  productName: string;
  description?: string;
  imageUrl?: string;
  price?: number;
}

export class ProductsEntity {
  @ApiProperty({
    example: '1',
    description: 'id of product',
  })
  productId: string;

  @ApiProperty({
    example: 'True Skin Vitamin C',
    description: 'name of product',
  })
  productName: string;

  @ApiPropertyOptional({
    example: 'Facial serum with vitamin C',
    description: 'description of product',
    default: '',
  })
  description?: string;

  @ApiPropertyOptional({
    example: 23.99,
    description: 'Price of product',
    default: 0,
  })
  price?: number;

  @ApiPropertyOptional({
    example: 'http://image.placeholder.com',
    description: 'image of product',
    default: '',
  })
  imageUrl?: string;
}

const ProductsRepository = new LowdbService<ProductsEntity>('products');

export default ProductsRepository;
