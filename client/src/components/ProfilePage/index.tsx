import React, { useState, useEffect } from "react";
import { BsBuilding } from 'react-icons/bs';
import { EditarPerfil } from "../EditarPerfil"
import { api, cancelTokenSource } from "../../services/api";
import  authServices from "../../services/authServices"



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

  useEffect(()=>{
    async function load() {
    
      const id = window.location.pathname.slice(16)
      try {
        const get = (await api.get(`/user/getOne/${id}`, { cancelToken: cancelTokenSource.token })).data;
        setUserData(prevData => ({ ...prevData, name: get.name}));
  
      } catch (err) {
        console.log(err);
      }
    }
    load()

    return () => {
      cancelTokenSource.cancel();
    }
  },[])


  let [userData, setUserData] = useState({
    name: "User Name",
    ownProfile: authServices.getIdFromAccessToken(localStorage.getItem("access-token")) == window.location.pathname.slice(16)
  });

  
  

  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Edit Profile</EditButton> */}
        <EditarPerfil />

        <h1 id="user-name">{userData.name}</h1>

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
