import styled from 'styled-components';

import ProgressBar from 'react-native-progress/Bar';

import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  width: ${metrics.screenWidth * 0.6}px;
  justify-content: center;
`;

export const Progress = styled(ProgressBar).attrs({
  width: null,
  height: metrics.base / 1.5,
  borderRadius: metrics.base / 0.75,
  color: colors.primaryLight,
  borderColor: colors.primaryLight,
})``;
