import React, { useState } from 'react';
import authServices from "../../services/authServices";
import Main from '../../components/Main';
import Review from '../../components/Review'

import { Container, Wrapper } from './styles';

const Profile: React.FC = () => {
  let [userData, setUserData] = useState({
    ownProfile: authServices.getIdFromAccessToken(localStorage.getItem("access-token")) == window.location.pathname.slice(16)
  });

  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
      {
        userData.ownProfile ?
          (() => { })() :
          (() => { return (<Review />) })()
      }
    </Container>
  );
};

export default Profile;
