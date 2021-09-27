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
      <Header>
        <button>
        </button>

        <ProfileInfo>
          <strong>Perfil Usuario</strong>
          <span>Desenvolvedor</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />
    </Container>
  );
};

export default Main;
