import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function ProfileOverview({ navigation }) {
  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('edit-profile')}
        >
          <Styled.ButtonText>Edit Profile</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}

ProfileOverview.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
