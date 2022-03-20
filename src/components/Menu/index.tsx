import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

import { MenuButton, Container } from "./styles";

const Menu: React.FC = () => {
  const [open, isOpen] = useState(false);

  return (
    <Container>
      <MenuButton onClick={() => isOpen(!open)}>
        <FaBars size={38} />
      </MenuButton>
      <Sidebar open={open} closeFn={isOpen} />
    </Container>
  );
};

export default Menu;
