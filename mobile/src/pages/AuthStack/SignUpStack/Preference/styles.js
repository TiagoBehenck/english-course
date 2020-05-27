import styled from 'styled-components';

import { colors } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grayWhite};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;
