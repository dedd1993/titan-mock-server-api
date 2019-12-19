import { Controller, Get, Res, HttpStatus, Query } from '@nestjs/common';
import { Response } from 'express';

import { BackendErrorCodes } from 'src/core/enums';
import * as paymentData from './data/payment-method.data';

@Controller('commons')
export class CommonController {

  @Get('/cashopening/status')
  getCashopeningStatus(@Res() res: Response): any {
    const errorResponse = {
      code: BackendErrorCodes.closed,
    };

    // res.status(HttpStatus.CONFLICT).send(errorResponse);
    res.status(HttpStatus.OK).send();
  }

  @Get('/payment-method')
  getPaymentMoethod(@Res() res: Response): any {
    const response = paymentData.data;
    // const response = require('./data/payment-method.mock');
    res.status(HttpStatus.OK).send(response);
  }

  @Get('/itf')
  getItf(@Query() query: { amount: number }): any {
    return { itf: 1 };
  }

  @Get('/change')
  getGhange(@Query() query: { debt: number, payment: number, itf: boolean }): any {
    return {
      debt: 1000,
      payment: 1000,
      itf: 0.00,
      change: 0.0,
      adjustment: 0.00,
      changeWithoutAdjustment: 0.00,
    };
  }
}
