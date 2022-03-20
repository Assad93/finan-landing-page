import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Presentation = styled.div`
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h1 {
      font-size: 38px;
    }

    > p {
      color: var(--gray);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1020px) {
    width: 60%;
    margin: 0 auto 30px;

    > div {
      align-items: center;

      > h1 {
        font-size: 48px;
        text-align: center;
      }

      > p {
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: inline-block;
  }
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > span {
    font-weight: bold;
  }

  @media screen and (min-width: 768px) and (max-width: 1020px) {
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 30px;
`;

export const LogoContainer = styled.div`
  width: 77px;
`;
