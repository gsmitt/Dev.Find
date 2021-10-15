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
        <Content>
          <Header>
            <strong>Titulo</strong>
            <Dot />
            <time>Post - Data</time>
          </Header>

          <ImageContent />

          <i>Descrição Projeto</i>

        </Content>
      </Body>
    </Container>
  );
};

export default Posts;
