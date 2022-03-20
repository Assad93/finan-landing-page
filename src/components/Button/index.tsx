import styled from "styled-components";

const Button = styled.button`
  background: var(--blue);
  font-weight: 600;
  border-radius: 50px;

  color: var(--white);
  padding: 10px 40px;

  width: 180px;
  height: 48px;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
