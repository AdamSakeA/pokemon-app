import { Container } from "./detailAbility.styles";
import { deleteSymbol } from "../../utils/settings/deleteSymbol";

export default function DetailAbility({ data }) {
  const abilityLang = data.effect_entries.filter(
    (item) => item.language.name === "en"
  );

  const handleAbility =
    abilityLang.length !== 0 ? abilityLang[0].effect : "Effect is empty";

  return (
    <Container>
      <h2>{deleteSymbol(data.name)}</h2>
      <p>{handleAbility}</p>
    </Container>
  );
}
