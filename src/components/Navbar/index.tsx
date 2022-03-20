import Image from "next/image";
import Link from "next/link";
import React from "react";

import LogoIcon from "../../../public/assets/images/logo.png";
import Menu from "../Menu";
import { Container, Logo, Nav, SignInButton } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Image src={LogoIcon} />
        <span>Finan</span>
      </Logo>
      <Menu />
      <Nav>
        <Link href={"/"}>
          <a className="active">Home</a>
        </Link>
        <Link href={"/"}>
          <a>Features</a>
        </Link>
        <Link href={"/"}>
          <a>Showcase</a>
        </Link>
        <Link href={"/"}>
          <a>Pricing</a>
        </Link>
      </Nav>
      <SignInButton>Sign In</SignInButton>
    </Container>
  );
};

export default Navbar;
