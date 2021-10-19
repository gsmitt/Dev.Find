import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './styles.css';

import Post from '../Posts';
import Comment from '../Comment';

import { Tab_Container, Container_Feed, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  let [data, setData] = useState({
    offset: 0,
    posts: [{
      title: "",
      image: "",
      description: "",
      updatedAt: "",
      score: 0,
      reviewer: {
        avatar: "",
        name: ""
      }
    }],
    selected: "post",
    count: 0
  });

  useEffect(() => {
    load("post", 0)
  }, []);

  async function load(type, offset) {
    const id = window.location.pathname.slice(16)
    try {
      const get = (await api.get(`/${type}/getByUser/${id}/${data.offset}`)).data;
      setData(prevData => ({ ...prevData, posts: get.list, count: get.count }));
      console.log(get)
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSelector(e) {
    const value = e.target.id.slice(1)
    setData(prevData => ({ ...prevData, selected: value, offset: 0 }));
    load(value, 0)
  }
  async function handleArrows(e) {
    const direction = e.target.id
    let value = 0
    if (data.selected == "post"){
      value = 3
    } else {
      value = 10
    }

    if (direction == "back" && data.offset - value >= 0){
      setData(prevData => ({ ...prevData, offset: prevData.offset - value}));
  
    } 
    if (direction == "forward" && data.offset + value < data.count){
      setData(prevData => ({ ...prevData, offset: prevData.offset + value}));
    }
    console.log(data.offset)
    
    load(data.selected, data.offset)
  }

  return (
    <Container_Feed>
      <Tab_Container>
        <Tab className={data.selected == "post" ? "selected-tab" : ""} id="-post" onClick={handleSelector}><p>Projetos</p></Tab>
        <Tab className={data.selected == "review" ? "selected-tab" : ""} id="-review" onClick={handleSelector}><p>Reviews</p></Tab>
      </Tab_Container>
      <Posts className="post-container">
        {data.selected == "post" ?
          (data.posts).map((item, index) => {
            if (item.description) {
              return (
                <Post
                  title={item.title}
                  date={item.updatedAt}
                  image={item.image}
                  description={item.description}
                  num={index} 
                  key={index}/>
              );
            }
          }) :

          (data.posts).map((item, index) => {
            if (item.reviewer) {
              return (
                <Comment
                  name={item.reviewer.name}
                  date={item.updatedAt}
                  avatar={item.reviewer.avatar}
                  score={item.score}
                  description={item.description}
                  num={index} 
                  key={index}/>
              );
            } else {

            }
          })}
        <ul className="nav-buttons">
          <li id="back" onClick={(e)=>{handleArrows(e)}}>
            <FaChevronLeft color="#ff9900" fontSize="inherit" id="back"/>
          </li>
          <li>
            <p>
              {`${Math.floor(data.offset / (data.selected == "post"? 3 : 10)) + 1}`}
            </p>
          </li>
          <li id="forward" onClick={(e)=>{handleArrows(e)}}>
            <FaChevronRight color="#ff9900" fontSize="inherit" id="forward"/>
          </li>
        </ul>

      </Posts>
    </Container_Feed>
  );
};

export default Feed;
