import styled from 'styled-components';

export const Container_Feed = styled.div`


`;

export const Tab_Container = styled.div`
  display: flex;
  margin-bottom: -15px;
  padding: 11px 0 15px;
  align-items: center;
`;

export const Tab = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 11px 218px 15px;
  text-align: center;

  font-weight: bold;
  font-size: 16px;

  outline: 0;
  cursor: pointer;

  color: var(--black);
  border-bottom: 2px solid var(--black);
  // border-top: 2px solid var(--black);
  
  &:hover {
    background: var(--tertiary);
    color: var(--white)
  }

  @media(max-width: 768px){
    position: relative;
    padding: 11px 63px 15px;
    height: 100%;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white)

  flex-shrink: 0;
`;
