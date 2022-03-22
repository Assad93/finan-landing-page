import Image from "next/image";
import React from "react";
import Button from "../Button";

import {
  Container,
  ImageContainer,
  SubscriptionContainer,
  Title,
  EmailInput,
  Description,
  SubscriptionButton,
  FormContainer,
} from "./styles";

import FakeVideo from "../../../public/assets/images/fake-video-img.png";

const Subscription: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={FakeVideo} alt="Imagem de duas executivas planejando" />
      </ImageContainer>
      <SubscriptionContainer>
        <Title>
          <span>Sem perca de tempo</span>
          <strong>E aumente sua produtividade</strong>
        </Title>
        <Description>
          Seus empregados podem trazer o sucesso dentro do seu negócio, você só
          precisa cuidar deles
        </Description>
        <FormContainer>
          <EmailInput placeholder="Digite seu Email" />
          <SubscriptionButton>Inscreva-se</SubscriptionButton>
        </FormContainer>
      </SubscriptionContainer>
    </Container>
  );
};

export default Subscription;
