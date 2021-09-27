import React from 'react';

import Post from '../Posts';

import { Container, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Overview</Tab>
      <Tab>Projetos</Tab>

      <Posts>
        <Post />
        <Post />
      </Posts>
    </Container>
  );
};

export default Feed;
