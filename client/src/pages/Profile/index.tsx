import React from 'react';

import Main from '../../components/Main';
import Review from '../../components/Review'

import { Container, Wrapper } from './styles';

const Profile: React.FC = () => {
  
  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
      <Review/>
      </Container>
  );
};

export default Profile;
