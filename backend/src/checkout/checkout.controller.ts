import {
  Controller,
  Post,
  HttpStatus,
  Body,
  HttpException,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CheckoutResponse,
  CheckoutBody,
  CheckoutException,
} from './checkout.entity';
import ApiException from '../shared/http-exceptions/api-exception';
import { CheckoutService } from './checkout.service';

@ApiTags('Checkout API')
@Controller('/api/checkout')
export class CheckoutController {
  constructor(private readonly _checkoutService: CheckoutService) {}

  @Post('')
  @ApiResponse({ status: HttpStatus.CREATED, type: CheckoutResponse })
  @ApiResponse({ status: HttpStatus.NOT_ACCEPTABLE, type: CheckoutException })
  validateCheckout(@Body() checkoutBody: CheckoutBody) {
    if (!this._checkoutService.validateBody(checkoutBody)) {
      throw new HttpException({ success: false }, HttpStatus.NOT_ACCEPTABLE);
    }
    return { success: true };
  }
}
