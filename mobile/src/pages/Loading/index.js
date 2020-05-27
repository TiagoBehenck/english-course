import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

import loading from '~/assets/images/loading.png';

export default function Loading({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Icon source={loading} />
        <Styled.Title>Carregando ...</Styled.Title>
        <Styled.Tip>
          Sabia que tem mais pessoas aprendendo inglês do que pessoas no Estados
          Unidos?
        </Styled.Tip>
        <Styled.ButtonContainer
          onPress={() =>
            navigation.navigate('tutorial-stack', { screen: 'first-page' })
          }
        >
          <Styled.ButtonText>Tutorial</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('auth-stack', { screen: 'home' })}
        >
          <Styled.ButtonText>Auth</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() =>
            navigation.navigate('main-tab', {
              screen: 'lesson-stack',
              params: {
                screen: 'introduction-lesson',
              },
            })
          }
        >
          <Styled.ButtonText>Main</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
