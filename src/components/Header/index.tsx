import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";

import { Container, Presentation } from "./styles";
import MainImg from "../../../public/assets/images/main-img.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Presentation>
        <div>
          <h1>Gerencie suas finanças como um expert</h1>
          <p>
            Finan te ajuda a controlar suas finanças, de uma maneira rápida,
            objetiva e fácil!
          </p>
        </div>
        <Image src={MainImg} alt={"Uma executiva segurando um copo de café"} />
      </Presentation>
    </Container>
  );
};

export default Header;
