import React from 'react';

import Loading from '~/pages/Loading';

import { Stack } from './exports';

import TutorialStack from './TutorialStack';
import AuthStack from './AuthStack';
import MainTab from './MainTab';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loading"
        component={Loading}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="tutorial-stack"
        component={TutorialStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth-stack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="main-tab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
