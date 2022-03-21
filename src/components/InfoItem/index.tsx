import React, { ReactNode } from "react";

import { Container, TextContainer } from "./styles";

type InfoItemProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = (props) => {
  return (
    <Container>
      <div>{props.children}</div>
      <TextContainer>
        <span>{props.title}</span>
        <p>{props.description}</p>
      </TextContainer>
    </Container>
  );
};

export default InfoItem;
