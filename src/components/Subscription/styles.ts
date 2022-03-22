import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    max-width: 520px;
    margin: 50px auto 0;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 50px;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 90%;
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    color: var(--red);
    font-weight: bold;
    text-transform: uppercase;
  }

  strong {
    font-size: 28px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const Description = styled.div`
  text-align: center;
  color: var(--gray);

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    > input {
      margin-bottom: 0;
    }

    > button {
      width: 180px;
      margin-left: -100px;
    }
  }
`;

export const EmailInput = styled.input`
  background: var(--light-background);
  outline: 0;
  border-radius: 50px;
  width: 90%;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 13px;
`;

export const SubscriptionButton = styled(Button)`
  width: 90%;
`;
