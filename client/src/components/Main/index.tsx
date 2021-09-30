import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  ProfileInfo,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <ProfilePage />
    </Container>
  );
};

export default Main;
