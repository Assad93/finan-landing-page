import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--dark-blue);
  width: 50vw;
  height: 100vh;
  text-align: left;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(200%)")};

  a {
    font-size: 15px;
    padding: 10px 0;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: var(--white);
  }

  @media screen and (min-width: 480px) {
    a {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 40vw;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
`;
