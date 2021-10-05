import React from 'react';
import { BsBuilding } from 'react-icons/bs';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Nome Usuário</h1>

        <p>
          Descrição, informações
        </p>

        <ul>
          <li>
            <LocationIcon />
            User - Location
          </li>
          <li>
            <BsBuilding />
             Company
          </li>
        </ul>

      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
