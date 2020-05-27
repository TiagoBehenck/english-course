import React from 'react';

import SignUp from '~/pages/AuthStack/SignUpStack/SignUp';
import Preference from '~/pages/AuthStack/SignUpStack/Preference';

import BackButton from '~/components/BackButton';
import StepIndicator from '~/components/StepIndicator';
import Progress from '~/components/Progress';

import { metrics } from '~/styles';

import { Stack } from './exports';

export default function SignUpStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="sign-up"
        component={SignUp}
        options={({ navigation }) => ({
          headerLeft: () => <BackButton navigation={navigation} />,
          headerRight: () => <StepIndicator text="1/2" />,
          headerTitle: () => <Progress progress={0.5} />,
          headerTitleStyle: {
            width: metrics.screenWidth,
          },
        })}
      />
      <Stack.Screen
        name="preference"
        component={Preference}
        options={({ navigation }) => ({
          headerLeft: () => <BackButton navigation={navigation} />,
          headerRight: () => <StepIndicator text="2/2" />,
          headerTitle: () => <Progress progress={1} />,
          headerTitleStyle: {
            width: metrics.screenWidth,
          },
        })}
      />
    </Stack.Navigator>
  );
}
