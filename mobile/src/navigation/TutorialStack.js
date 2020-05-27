import React from 'react';

import FirstScreen from '~/pages/TutoriaStack/FirstPage';
import SecondScreen from '~/pages/TutoriaStack/SecondPage';
import ThirdScreen from '~/pages/TutoriaStack/ThirdPage';

import { Stack } from './exports';

export default function TutorialStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="first-page" component={FirstScreen} />
      <Stack.Screen name="second-page" component={SecondScreen} />
      <Stack.Screen name="third-page" component={ThirdScreen} />
    </Stack.Navigator>
  );
}
