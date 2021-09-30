import React from 'react';

import Post from '../Posts';

import { Container_Feed, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  return (
    <Container_Feed>
      <Tab>Overview</Tab>
      <Tab>Projetos</Tab>

      <Posts>
        <Post />
        <Post />
      </Posts>
    </Container_Feed>
  );
};

export default Feed;
