import React from "react";
import { BsBuilding } from 'react-icons/bs';
import { EditarPerfil } from "../EditarPerfil"
import { api } from "../../services/api";



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
  
  
  async function load() {
    const id = window.location.pathname.slice(16)
    try {
        const get = (await api.get(`/user/getOne/${id}`)).data;
        console.log(get)    
    } catch (err) {
        console.log(err);
    }
  }
  load()
  
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Edit Profile</EditButton> */}
        <EditarPerfil />

        <h1 id="user-name">Nome Usuário</h1>

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
