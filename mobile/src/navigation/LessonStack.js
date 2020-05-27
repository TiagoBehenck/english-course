import React from 'react';

import IntroductionLesson from '~/pages/MainTab/LessonStack/IntroductionLesson';
import OverviewLesson from '~/pages/MainTab/LessonStack/OverviewLesson';
import VideoLesson from '~/pages/MainTab/LessonStack/VideoLesson';
import AudioLesson from '~/pages/MainTab/LessonStack/AudioLesson';
import MultipleChoiceLesson from '~/pages/MainTab/LessonStack/MultipleChoiceLesson';
import DissertativeLesson from '~/pages/MainTab/LessonStack/DissertativeLesson';
import TranslateLesson from '~/pages/MainTab/LessonStack/TranslateLesson';
import WordPairsLesson from '~/pages/MainTab/LessonStack/WordPairsLesson';

import { Stack } from './exports';

export default function LessonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="introduction-lesson" component={IntroductionLesson} />
      <Stack.Screen name="overview-lesson" component={OverviewLesson} />
      <Stack.Screen name="video-lesson" component={VideoLesson} />
      <Stack.Screen name="audio-lesson" component={AudioLesson} />
      <Stack.Screen
        name="multiple-choice-lesson"
        component={MultipleChoiceLesson}
      />
      <Stack.Screen name="dissertative-lesson" component={DissertativeLesson} />
      <Stack.Screen name="translate-lesson" component={TranslateLesson} />
      <Stack.Screen name="word-pairs-lesson" component={WordPairsLesson} />
    </Stack.Navigator>
  );
}
