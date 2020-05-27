import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function SignIn({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('forgot-password')}
        >
          <Styled.ButtonText>Forgot Password</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('use-terms')}
        >
          <Styled.ButtonText>Use Terms</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
