import React from 'react';
import { PaymentDetailTemplate } from '@poc/templates';
import { ThemeBase } from '@poc/theme';
import { usePaymentDetailController } from '@poc/core';

export const PaymentDetail = () => {
  const {data,error, loading} = usePaymentDetailController();
  return (
    <PaymentDetailTemplate theme={ThemeBase.Midway} 
      data={data}
      loading={loading}
      error={error}
    />
  );
};
