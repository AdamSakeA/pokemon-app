import Abilities from "../abilities";
import { Container, Title } from "./listAbilities.styles";

export default function ListAbilities({ abilities }) {
  const displayAbilities = abilities?.map((item, i) => {
    return <Abilities key={i} ability={item.ability.name} />;
  });

  return (
    <Container>
      <Title>Abilities</Title>
      {displayAbilities}
    </Container>
  );
}
