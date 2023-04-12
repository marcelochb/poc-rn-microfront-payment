import { IScreen } from '@poc/interfaces';
import { PaymentListScreen } from './list';
import { NAVIGATOR_CONSTANTS } from '../constants';
import { PaymentDetailScreen } from './detail';

export const screens:IScreen[] = [
  {
    component: PaymentListScreen,
    name: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.LIST_SCREEN_TITLE
  },
  {
    component: PaymentDetailScreen,
    name: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_TITLE
  }
]