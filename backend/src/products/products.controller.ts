import { ProductsEntity } from './products.entity';
import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import ApiException from '../shared/http-exceptions/api-exception';

@ApiTags('Products API')
@Controller('/api/products')
export class ProductsController {
  constructor(private readonly _productsService: ProductsService) {}

  @Get('')
  @ApiResponse({
    status: HttpStatus.OK,
    type: [ProductsEntity],
    description: 'get products successful',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiException,
  })
  @ApiOperation({ summary: 'Get All products' })
  async findAll() {
    return this._productsService.findAll();
  }
}
