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

interface Props{
  title: string,
  date: string,
  image: string,
  description: string,
  num: number
}
const Posts: React.FC<Props> = (props) => {
  const imgDiv= document.querySelector<HTMLElement>(`.img-div${props.num}`)
  if(imgDiv){
    imgDiv!.style.backgroundImage = props.image? `url(${props.image})`: `url("https://uploaddeimagens.com.br/images/003/482/514/original/postvazio.png?1634321165")`
    imgDiv!.style.backgroundSize = "cover"
    imgDiv!.style.maxWidth = "100%"
  }
  return (
    <Container>
      <Body>
        <Content>
          <Header>
            <strong>{props.title}</strong>
            <Dot />
            <time>{props.date}</time>
          </Header>

          <ImageContent className={`img-div${props.num}`}/>

          <i>{props.description}</i>

        </Content>
      </Body>
    </Container>
  );
};

export default Posts;
