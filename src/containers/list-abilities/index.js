import { useEffect, useState } from "react";
import { Button } from "../../components";
import Abilities from "../abilities";
import { Container } from "./listAbilities.styles";
import { deleteSymbol } from "../../utils/settings";

export default function ListAbilities({ abilities }) {
  const [abilityName, setAbilityName] = useState();
  const displayAbilities = <Abilities ability={abilityName} />;

  useEffect(() => {
    if (abilities) setAbilityName(abilities[0].ability.name);
  }, [abilities]);

  const handleDisplay = (name) => {
    setAbilityName(name);
  };

  return (
    <Container>
      <div className="abilities">
        {abilities?.map((item, i) => {
          return (
            <Button
              key={i}
              fontSize={"12px"}
              onClick={() => handleDisplay(item.ability.name)}
              type={
                abilityName === item.ability.name
                  ? "secondaryActive"
                  : "secondary"
              }
            >
              {deleteSymbol(item.ability.name)}
            </Button>
          );
        })}
      </div>
      {displayAbilities}
    </Container>
  );
}
