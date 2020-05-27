import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function SignUp({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('preference')}
        >
          <Styled.ButtonText>Preference</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
