import React from "react";
import Effects from "../effects";
import { Container, Title } from "./listEffects.styles";

export default function ListEffects({ effects }) {
  const effect = effects?.map((item, i) => {
    return <Effects key={i} effect={item.type.name} />;
  });

  return (
    <Container>
      <Title>Skill Effects</Title>
      {effect}
    </Container>
  );
}
