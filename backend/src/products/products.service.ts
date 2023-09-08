import { Injectable } from '@nestjs/common';
import ProductsRepository from './products.entity';

@Injectable()
export class ProductsService {
  private repo = ProductsRepository;

  async findAll() {
    return this.repo.findAll();
  }
}
