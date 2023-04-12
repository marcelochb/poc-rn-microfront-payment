import React from 'react';
import { PaymentDetailTemplate } from '@poc/templates';
import { usePaymentDetailController } from '@poc/core';
import { useSelector } from 'react-redux';
import { IGlobalState } from '@poc/interfaces';

export const PaymentDetailScreen = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
  const {data,error, loading} = usePaymentDetailController();
  return (
    <PaymentDetailTemplate theme={theme} 
      data={data}
      loading={loading}
      error={error}
    />
  );
};
