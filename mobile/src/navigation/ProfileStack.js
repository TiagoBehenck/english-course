import React from 'react';

import ProfileOverview from '~/pages/MainTab/ProfileStack/ProfileOverview';
import EditProfile from '~/pages/MainTab/ProfileStack/EditProfile';

import { Stack } from './exports';

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile-overview" component={ProfileOverview} />
      <Stack.Screen name="edit-profile" component={EditProfile} />
    </Stack.Navigator>
  );
}
