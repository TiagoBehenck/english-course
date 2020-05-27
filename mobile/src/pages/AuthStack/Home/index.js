import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

import logo from '~/assets/images/logo.png';

export default function Home({ navigation }) {
  return (
    <Styled.Container>
      <Styled.DescriptionContainer>
        <Styled.Logo source={logo} />
        <Styled.Title>English Course</Styled.Title>
        <Styled.Description>
          Aprenda Inglês da forma certa, e o melhor rápido e fácil
        </Styled.Description>
      </Styled.DescriptionContainer>
      <Styled.ButtonsContainer>
        <Styled.ButtonContainer
          filled
          onPress={() =>
            navigation.navigate('sign-in-stack', {
              screen: 'sign-in',
            })
          }
        >
          <Styled.ButtonText filled>Começar Agora</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() =>
            navigation.navigate('sign-up-stack', {
              screen: 'sign-up',
            })
          }
        >
          <Styled.ButtonText>Já tenho uma conta</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
