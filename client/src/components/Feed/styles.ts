import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--dev);
  border-bottom: 2px solid var(--dev);

  &:hover {
    background: var(--dev-dark-hover);
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
