import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';
import { CreditCardModule } from './credit-card/credit-card.module';

@Module({
  imports: [
    PaymentModule,
    CommonModule,
    CoreModule,
    CreditCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
