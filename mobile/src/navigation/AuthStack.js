import React from 'react';

import Home from '~/pages/AuthStack/Home';

import SignInStack from './SignInStack';
import SignUpStack from './SignUpStack';

import { Stack } from './exports';

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="sign-in-stack"
        component={SignInStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up-stack"
        component={SignUpStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
