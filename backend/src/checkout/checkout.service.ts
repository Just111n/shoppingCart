import { Injectable } from '@nestjs/common';
import { ICheckout } from './checkout.entity';

@Injectable()
export class CheckoutService {
  public validateBody(body: ICheckout): boolean {
    const { paySuccess, productsInOrder } = body;
    const errors = [];
    if (!paySuccess) {
      errors.push('pay error');
    }
    if (!productsInOrder && productsInOrder.length < 1) {
      errors.push('order error');
    }
    return errors.length === 0;
  }
}
