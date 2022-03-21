import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  max-width: 385px;
  margin: 50px auto 0;
`;

export const ItemContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    gap: 40px 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  span:first-child {
    color: var(--red);
    font-weight: bold;
    text-transform: uppercase;
  }

  span:last-child {
    font-size: 28px;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    span:last-child {
      font-size: 36px;
    }
  }
`;

export const Subtitle = styled.div`
  text-align: center;
  color: var(--gray);
`;

export const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
`;
