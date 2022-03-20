import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
import Button from "../Button";

import {
  Container,
  Presentation,
  ImageContainer,
  Partners,
  LogoContainer,
  LogosWrapper,
} from "./styles";

import MainImg from "../../../public/assets/images/main-img.png";
import AppleLogo from "../../../public/assets/images/logo-apple.png";
import AdobeLogo from "../../../public/assets/images/logo-adobe.png";
import SlackLogo from "../../../public/assets/images/logo-slack.png";
import SpotifyLogo from "../../../public/assets/images/logo-spotify.png";
import GoogleLogo from "../../../public/assets/images/logo-google.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Presentation>
        <div>
          <h1>Gerencie suas finanças</h1>
          <p>
            Finan te ajuda a controlar suas finanças, de uma maneira rápida,
            objetiva e fácil! Controle suas finanças como expert.
          </p>
          <Button>Get Started</Button>
        </div>
        <ImageContainer>
          <Image
            src={MainImg}
            alt={"Uma executiva segurando um copo de café"}
          />
        </ImageContainer>
      </Presentation>
      <Partners>
        <span>Trusted by Global Companies</span>

        <LogosWrapper>
          <LogoContainer>
            <Image src={AppleLogo} />
          </LogoContainer>
          <LogoContainer>
            <Image src={AdobeLogo} />
          </LogoContainer>
          <LogoContainer>
            <Image src={SlackLogo} />
          </LogoContainer>
          <LogoContainer>
            <Image src={SpotifyLogo} />
          </LogoContainer>
          <LogoContainer>
            <Image src={GoogleLogo} />
          </LogoContainer>
        </LogosWrapper>
      </Partners>
    </Container>
  );
};

export default Header;
