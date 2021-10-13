import React, { useState, useEffect } from "react";
import { api, cancelTokenSource } from "../../services/api";
import authServices from "../../services/authServices";

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  ImageContent,
} from './styles';

const Posts: React.FC = () => {
  /*
  let [data, setData] = useState({
    offset: 0
  });

  useEffect(() => {
    async function load() {
      const id = window.location.pathname.slice(16)
      try {
        const get = (await api.get(`/post/getMany/${id}/${data.offset}`)).data;
        console.log(get)

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
    }

    load()
    return () => {
      cancelTokenSource.cancel();
    }
  }, [])
  */

  return (
    <Container>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Nome Usuário</strong>
            <Dot />
            <time>Post - Data</time>
          </Header>

          <i>Descrição Projeto</i>

          <ImageContent />

        </Content>
      </Body>
    </Container>
  );
};

export default Posts;
