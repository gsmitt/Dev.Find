import React, { useState, useEffect } from "react";
import { BsBuilding } from 'react-icons/bs';
import { EditarPerfil } from "../EditarPerfil";
import { api, cancelTokenSource } from "../../services/api";
import authServices from "../../services/authServices";



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

  let [userData, setUserData] = useState({
    name: "User Name",
    description: "Description",
    location: "Location",
    company: "Company",
    ownProfile: authServices.getIdFromAccessToken(localStorage.getItem("access-token")) == window.location.pathname.slice(16)
  });

  useEffect(() => {
    async function load() {
      const id = window.location.pathname.slice(16)
      try {
        const get = (await api.get(`/user/getOne/${id}`, { cancelToken: cancelTokenSource.token })).data;
        setUserData(prevData => (
          {
            ...prevData,
            name: get.name,
            description: get.description,
            location: get.location,
            company: get.company
          }
        ));
        loadImages(get);
      } catch (err) {
        console.log(err);
      }
    }

    function loadImages(get) {
      let avatar = document.querySelector<HTMLElement>(".avatar");
      if (get.avatar != "") {
        avatar!.style.backgroundImage = `url(${get.avatar})`
        avatar!.style.backgroundSize = "cover"
      }
      let banner = document.querySelector<HTMLElement>(".banner");
      if (get.background != "") {
        banner!.style.backgroundImage = `url(${get.background})`
        banner!.style.backgroundSize = "cover"
      }
    }

    load()
    return () => {
      cancelTokenSource.cancel();
    }
  }, [])




  return (
    <Container>
      <Banner className="banner">
        <Avatar className="avatar" />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Edit Profile</EditButton> */}
        <EditarPerfil />

        <h1 id="user-name">{userData.name}</h1>

        <p>
          {userData.description}
        </p>

        <ul>
          <li>
            <LocationIcon />
            {userData.location}
          </li>
          <li>
            <BsBuilding />
            {userData.company}
          </li>
        </ul>

      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
