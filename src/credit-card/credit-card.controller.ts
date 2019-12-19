import { Controller, Post, Param } from '@nestjs/common';
import { IPaymentRequest } from 'src/core/models/payment.request';
import { IPaymentResponse } from 'src/core/models/payment.response';

@Controller('credit-card')
export class CreditCardController {

  @Post('/payment')
  getItf(@Param() param: IPaymentRequest): IPaymentResponse {
    return {
      transactionId: 'string',
      pendingPay: {
        soles: 'string',
        dollars: 'string',
        fee: {
          total: 'string',
          minimun: 'string',
        },
      },
      operationDate: 'string',
      operationId: 'string',
      creditCardHolder: 'string',
      creditCardType: 'string',
      creditCardNumber: 'string',
      itf: 'string',
      adjustment: 'string',
      change: 'string',
      amount: 'string',
      amountClient: 'string',
      currencyCode: 'string',
      registerCode: 'string',
      storeCode: 'string',
      doubleCurrencyAccountIndicator: 'string',
      hasItf: 'string',
      printerName: 'string',
    };
  }

}
