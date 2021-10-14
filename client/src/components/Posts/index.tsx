import React from "react";

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  ImageContent,
} from './styles';

const Posts: React.FC = (props) => {

  return (
    <Container>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Titulo</strong>
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
