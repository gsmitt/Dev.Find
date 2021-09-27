import React from 'react';

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
