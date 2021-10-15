import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

import Post from '../Posts';

import { Tab_Container, Container_Feed, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  /*
  let [data, setData] = useState({
    offset: 0
  });

  useEffect(() => {

    async function load() {
      const id = window.location.pathname.slice(16)
      try {
        const get = (await api.get(`/post/getByUser/${id}/${data.offset}`)).data;

      } catch (err) {
        console.log(err);
      }
    }

    load()
    return () => {
      cancelTokenSource.cancel();
    }
  }, []);
  */
  return (
    <Container_Feed>
      <Tab_Container>
        <Tab>Projetos</Tab>
        <Tab>Reviews</Tab>
      </Tab_Container>
      <Posts className="post-container">
        <Post />
        <Post />
        <Post />
      </Posts>
    </Container_Feed>
  );
};

export default Feed;
