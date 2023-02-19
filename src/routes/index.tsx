import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaymentDetail, PaymentList } from '../screens';

const Stack = createNativeStackNavigator();

export const PaymentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaymentList" component={PaymentList} />
      <Stack.Screen name="PaymentDetail" component={PaymentDetail} />
    </Stack.Navigator>
  )
}
