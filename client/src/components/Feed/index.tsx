import React from 'react';

import Post from '../Posts';

import { Tab_Container, Container_Feed, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  return (
    <Container_Feed>
      <Tab_Container>
        <Tab>Projetos</Tab>
      </Tab_Container>

      <Posts>
        <Post />
        <Post />
      </Posts>
    </Container_Feed>
  );
};

export default Feed;
