import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import './styles.css';

import Post from '../Posts';

import { Tab_Container, Container_Feed, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  let [data, setData] = useState({
    offset: 0,
    posts: [{
      title: "",
      image: "",
      description: "",
      updatedAt: ""
    }],
    selected: "post"
  });

  useEffect(() => {
    load(data.selected)
  }, []);

  async function load(type) {
    const id = window.location.pathname.slice(16)
    try {
      const get = (await api.get(`/${type}/getByUser/${id}/${data.offset}`)).data;
      setData(prevData => ({ ...prevData, posts: get }));
      console.log(get)
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSelector(e) {
    const value = e.target.id.slice(1)
    setData(prevData => ({ ...prevData, selected: value }));
    load(data.selected)
  }

  return (
    <Container_Feed>
      <Tab_Container>
        <Tab className={data.selected == "post" ? "selected-tab" : ""} id="-post" onClick={handleSelector}><p>Projetos</p></Tab>
        <Tab className={data.selected == "review" ? "selected-tab" : ""} id="-review" onClick={handleSelector}><p>Reviews</p></Tab>
      </Tab_Container>
      <Posts className="post-container">
        {data.selected == "post"? (data.posts).map((item, index) => {
          return (
            <Post
              title={item.title}
              date={item.updatedAt}
              image={item.image}
              description={item.description}
              num={index} />
          );
        }):

        (data.posts).map((item, index) => {
          return (
            <Post
              title={item.title}
              date={item.updatedAt}
              image={item.image}
              description={item.description}
              num={index} />
          );
        })}
      </Posts>
    </Container_Feed>
  );
};

export default Feed;
