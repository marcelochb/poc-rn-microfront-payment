export type ModelOfPaymentScreens = {
  list: string;
  detail: string;
}
export type ModelOfPaymentNavigator = {
  stack: string;
  title: string;
  screens: ModelOfPaymentScreens;
}
export const PAYMENT_NAVIGATORS:ModelOfPaymentNavigator = {
  stack: 'PaymentStack',
  title: 'Pagamentos',
  screens: {
    list: 'PaymentList',
    detail: 'PaymentDetail'
  }
}