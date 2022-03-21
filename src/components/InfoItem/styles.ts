import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-weight: 600;
    font-size: 18px;
  }

  > p {
    color: var(--gray);
    font-size: 12px;
  }
`;
