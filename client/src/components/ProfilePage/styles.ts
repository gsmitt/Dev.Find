import styled, { css } from 'styled-components';

import { LocationOn, } from '../../styles/Icons';
import Button from '../Button';
import Input from '../Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  @media(min-width: 1800px){
    min-height: 750px;
   }

  @media(max-width: 768px){
    position: relative;
    width: 38%;
    height: 100%;
    overflow-y: hidden;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  height: min( 150px);

  background: var(--tertiary);


`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--tertiary);
  background: var(--gray);
  border-radius: 50%;
  

  margin-top: 70px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  @media(max-width: 768px){
    position: relative;
    top: 15px;
    right: 21px;
    width: max(45px, min(135px, 30vw));
    height: max(45px, min(135px, 30vw));
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 35px) 16px 0;
  background-color: var(--tertiary)
  color: var(--black)

  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: bold;
    font-size: 19px;
    color: var(--black)
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;

  }
  > p {
    font-size: 15px;
    margin-top: 12px;

    > a {
      text-decoration: none;
      color: var(--dev);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 20px;

    > li {
      font-size: 15px;
      color: var(--black);

      > svg {
        fill: var(--gray);
        margin-right: 8px;
      }
    }
  }

  @media(max-width: 768px){
    position: relative;
    right: 5px;
    bottom: 30px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const EditButton = styled(Button)`
  /* font-size: 13px;
  margin-left: 800px;
  margin-top: -10px; */

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

`;