export type IPaymentScreens = {
  list: string;
  detail: string;
}
export type IPaymentNavigator = {
  stack: string;
  title: string;
  screens: IPaymentScreens;
}
export const PAYMENT_NAVIGATORS:IPaymentNavigator = {
  stack: 'PaymentStack',
  title: 'Pagamentos',
  screens: {
    list: 'PaymentList',
    detail: 'PaymentDetail'
  }
}