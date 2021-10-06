import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--dev)')};
  color: ${(props) => (props.outlined ? 'var(--black)' : 'var(--black)')};
  border: ${(props) => (props.outlined ? '1px solid var(--black)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--cinzinha)'
        : 'var(--white)'};
  }
`;
