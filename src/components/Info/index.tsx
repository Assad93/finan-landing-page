import Image from "next/image";
import React from "react";
import InfoItem from "../InfoItem";

import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  ImageContainer,
  ItemContainer,
} from "./styles";

import Suitcase from "../../../public/assets/images/suitcase-icon.png";
import Arrow from "../../../public/assets/images/arrow-icon.png";
import Gift from "../../../public/assets/images/gift-icon.png";
import Globe from "../../../public/assets/images/globe-icon.png";
import NoWifi from "../../../public/assets/images/no-wifi-icon.png";
import Trello from "../../../public/assets/images/trello-icon.png";

const Info: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>Trabalhe melhor</span>
          <span>Para o seu negócio</span>
        </Title>
        <Subtitle>
          Nós pesquisamos o que sua empresa necessita e nós iremos
          disponibilizar tudo conforme a sua necessidade.
        </Subtitle>
      </Wrapper>
      <ItemContainer>
        <InfoItem
          title="Compartilhar Insights"
          description="Trabalhando em conjunto com a sua equipe para tomar decisões"
        >
          <ImageContainer>
            <Image src={Suitcase} alt="Ícone de uma mala" />
          </ImageContainer>
        </InfoItem>
        <InfoItem
          title="Rastrear leads"
          description="Veja para onde vai e vem o dinheiro do negócio"
        >
          <ImageContainer>
            <Image src={Arrow} alt="Ícone de uma flecha" />
          </ImageContainer>
        </InfoItem>
        <InfoItem
          title="Módulo Offline"
          description="Utilize o sistema mesmo sem internet"
        >
          <ImageContainer>
            <Image src={NoWifi} alt="Ícone de offline" />
          </ImageContainer>
        </InfoItem>
        <InfoItem
          title="Modo Kanban"
          description="Organize as tarefas de modo rápido e fácil"
        >
          <ImageContainer>
            <Image src={Trello} alt="Ícone do trello" />
          </ImageContainer>
        </InfoItem>
        <InfoItem
          title="Sistema de recompensa"
          description="Se seu time trabalhar duro ele irá ganhar presentes"
        >
          <ImageContainer>
            <Image src={Gift} alt="Ícone de um presente" />
          </ImageContainer>
        </InfoItem>
        <InfoItem
          title="189 Países"
          description="Conte com uma comunidade global para ter suporte em tempo real"
        >
          <ImageContainer>
            <Image src={Globe} alt="Ícone de um globo" />
          </ImageContainer>
        </InfoItem>
      </ItemContainer>
    </Container>
  );
};

export default Info;
