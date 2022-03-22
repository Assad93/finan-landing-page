import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import { CloseButton, Container } from "./styles";

type SidebarProps = {
  open: boolean;
  closeFn: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Container open={props.open}>
      <CloseButton onClick={() => props.closeFn(!props.open)}>
        <FaTimes size={24} color="white" />
      </CloseButton>
      <Link href={"/"}>
        <a className="active">Home</a>
      </Link>
      <Link href={"/"}>
        <a>Recursos</a>
      </Link>
      <Link href={"/"}>
        <a>Showcase</a>
      </Link>
      <Link href={"/"}>
        <a>Preços</a>
      </Link>
    </Container>
  );
};

export default Sidebar;
