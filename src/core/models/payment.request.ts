export interface IPaymentRequest {
  trxAmount: string;
  trxAmountClient: string;
  cardId: string;
  applyITF: string;
  identityDocumentId: string;
  identityDocumentType: string;
  itf: string;
  change: string;
  adjustment: string;
  changeWithoutAdjustment: string;
  creditCardHolder: string;
  creditCardType: string;
  currencyCode: string;
  doubleCurrencyAccountIndicator: string;
  destinationEmail: string;
}
