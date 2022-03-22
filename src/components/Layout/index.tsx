import React from "react";
import Header from "../Header";
import Info from "../Info";
import Subscription from "../Subscription";

import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Info />
      <Subscription />
      {/*
       */}
    </Container>
  );
};

export default Layout;
