export interface IPendingPay {
  soles: string;
  dollars: string;
  fee?: {
    total: string;
    minimun: string;
  };
}

export interface IPaymentResponse {
  transactionId: string;
  pendingPay: IPendingPay;
  operationDate: string;
  operationId: string;
  creditCardHolder: string;
  creditCardType: string;
  creditCardNumber: string;
  itf: string;
  adjustment: string;
  change: string;
  amount: string;
  amountClient: string;
  currencyCode: string;
  registerCode: string;
  storeCode: string;
  doubleCurrencyAccountIndicator: string;
  hasItf?: string;
  printerName: string;
}
