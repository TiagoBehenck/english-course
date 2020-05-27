import React from 'react';

import SignIn from '~/pages/AuthStack/SignInStack/SignIn';
import ForgotPassword from '~/pages/AuthStack/SignInStack/ForgotPassword';
import UseTerms from '~/pages/AuthStack/SignInStack/UseTerms';

import { Stack } from './exports';

export default function SignInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="sign-in" component={SignIn} />
      <Stack.Screen name="forgot-password" component={ForgotPassword} />
      <Stack.Screen name="use-terms" component={UseTerms} />
    </Stack.Navigator>
  );
}
