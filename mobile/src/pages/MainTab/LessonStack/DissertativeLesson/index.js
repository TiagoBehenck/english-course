import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function DissertativeLesson({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('overview-lesson')}
        >
          <Styled.ButtonText>Overview Lesson</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('video-lesson')}
        >
          <Styled.ButtonText>Video Lesson</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('audio-lesson')}
        >
          <Styled.ButtonText>Audio Lesson</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('multiple-choice-lesson')}
        >
          <Styled.ButtonText>Multiple Choice Lesson</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('translate-lesson')}
        >
          <Styled.ButtonText>Translate Lesson</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('word-pairs-lesson')}
        >
          <Styled.ButtonText>Word Pairs Lesson</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

DissertativeLesson.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
