import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, fonts, colors } from '~/styles';

Icon.loadFont();

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.base * 2}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: ${metrics.base}px;
  height: 50px;
  padding: ${metrics.base}px ${metrics.base * 2}px;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius * 2}px;
  background-color: ${colors.primaryDark};
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  text-transform: uppercase;
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
`;
