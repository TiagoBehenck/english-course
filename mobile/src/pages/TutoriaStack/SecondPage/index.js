import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function SecondPage({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Title>Página 02 do Tutorial</Styled.Title>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('third-page')}
        >
          <Styled.ButtonText>Terceira Página</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

SecondPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
