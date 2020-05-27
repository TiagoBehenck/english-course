import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function ThirdPage({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Title>Página 02 do Tutorial</Styled.Title>
        <Styled.ButtonContainer onPress={() => navigation.goBack()}>
          <Styled.ButtonText>Segunda Página</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

ThirdPage.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
