import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--dev)')};
  color: ${(props) => (props.outlined ? 'var(--dev)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--dev)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--dev-dark-hover)'
        : 'var(--dev-light-hover)'};
  }
`;
