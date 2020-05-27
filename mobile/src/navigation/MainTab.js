import React from 'react';

import Dictionary from '~/pages/MainTab/Dictionary';
import Update from '~/pages/MainTab/Update';

import LessonStack from './LessonStack';
import ProfileStack from './ProfileStack';

import { Tab } from './exports';

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="lesson-stack" component={LessonStack} />
      <Tab.Screen name="dictionary" component={Dictionary} />
      <Tab.Screen name="profile-stack" component={ProfileStack} />
      <Tab.Screen name="update" component={Update} />
    </Tab.Navigator>
  );
}
