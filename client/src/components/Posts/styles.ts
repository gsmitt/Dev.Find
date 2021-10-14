import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cinzinha);

  padding: 14px 16px;

  border-bottom: 1px solid var(--black);

  max-width: 100%;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 5px;

`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: relative;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 30px;

  > i {
    margin-left: 50px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 10px;
  }

  > span,
  time {
    color: var(--white);
  }

  > strong,
  span {
    margin-left: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--white);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 55px;
  width: 85%;
  height: min(400px, max(175px, 41vw));

  background: var(--image);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  @media(max-width: 768px){
    position: relative;
    right: 70px;
    width: 100%;
  }
`;