import React from "react";

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot
} from './styles';

interface Props{
  name: string,
  date: string,
  avatar: string,
  description: string,
  score: number,
  num: number
}
const Comment: React.FC<Props> = (props) => {
  const imgDiv= document.querySelector<HTMLElement>(`.avatar-div${props.num}`)
  if(imgDiv){
    imgDiv!.style.backgroundImage = props.avatar? `url(${props.avatar})`: `url("https://uploaddeimagens.com.br/images/003/482/514/original/postvazio.png?1634321165")`
    imgDiv!.style.backgroundSize = "cover"
    imgDiv!.style.maxWidth = "100%"
  }
  return (
    <Container>
      <Body>
      <Avatar className={`avatar-div${props.num}`}/>
        <Content>
          <Header>
            <strong>{props.name}</strong>
            <Dot />
            <p>{"Nota: " + props.score}</p>
            <Dot />
            <time>{props.date}</time>
            
          </Header>
          <i>{props.description}</i>
        </Content>
      </Body>
    </Container>
  );
};

export default Comment;
