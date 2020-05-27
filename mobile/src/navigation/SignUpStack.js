import React from 'react';

import SignUp from '~/pages/AuthStack/SignUpStack/SignUp';
import Preference from '~/pages/AuthStack/SignUpStack/Preference';

import { Stack } from './exports';

export default function SignUpStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="sign-up" component={SignUp} />
      <Stack.Screen name="preference" component={Preference} />
    </Stack.Navigator>
  );
}
