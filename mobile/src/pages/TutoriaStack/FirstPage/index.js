import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function FirstPage({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Title>Página 01 do Tutorial</Styled.Title>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('second-page')}
        >
          <Styled.ButtonText>Segunda Página</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

FirstPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
