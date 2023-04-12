import React, { useCallback } from 'react'
import { PaymentListTemplate } from '@poc/templates'
import { PaymentEntity, usePaymentListController } from '@poc/core'
import { useSelector } from 'react-redux'
import { IGlobalState } from '@poc/interfaces'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'

export const PaymentListScreen = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:PaymentEntity) => {
      navigation.navigate(NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME, {id: item.id});
    },[]
  )  
  const {data, error, loading} = usePaymentListController();
  return (
    <PaymentListTemplate theme={theme} 
      listData={data}
      error={error}
      loading={loading}
      callBack={navigateToDetail}
    />
  )
}
