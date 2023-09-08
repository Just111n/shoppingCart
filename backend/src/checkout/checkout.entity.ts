import { ApiProperty } from '@nestjs/swagger';
export interface ICart {
  [key: string]: any;
  productId: string;
  quantity: number;
}
export interface ICheckout {
  productsInOrder: ICart[];
  paySuccess: boolean;
}

export class CheckoutBody implements ICheckout {
  @ApiProperty({
    required: true,
    example: true,
    description: 'check if user has already pay successful',
  })
  paySuccess: boolean;

  @ApiProperty({
    required: true,
    description: 'orders information',
    example: [
      {
        productId: '1',
        quantity: 1,
      },
    ],
  })
  productsInOrder: ICart[];
}

export class CheckoutResponse {
  @ApiProperty({ description: 'success checkout response' })
  success: boolean;
}

export class CheckoutException {
  @ApiProperty({ example: false, description: 'success checkout response' })
  success: boolean;
}
