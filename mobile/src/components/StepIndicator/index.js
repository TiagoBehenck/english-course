import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function BackButton({ text }) {
  return (
    <Styled.Container>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
}

BackButton.propTypes = {
  text: PropTypes.string.isRequired,
};
