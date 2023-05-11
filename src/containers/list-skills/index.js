import { Container, SkillsContainer } from "./pokemonSkills.styles";
import { Button } from "../../components";
import { ResponsiveSkills } from "./responsive-skills";
import { textToCapitalize } from "../../utils/settings";

export default function ListSkills({ payload, type, setType, isLoading }) {
  // set type to null
  const onClear = () => {
    setType("");
  };

  const pokemonFilteredByType = (type) => {
    setType(type);
  };

  return (
    <SkillsContainer data-testid="skills-container">
      <SkillsContents
        payload={payload}
        type={type}
        onClick={pokemonFilteredByType}
        onClear={onClear}
        isLoading={isLoading}
      />
      <ResponsiveSkills
        payload={payload}
        type={type}
        onClick={pokemonFilteredByType}
        onClear={onClear}
      />
    </SkillsContainer>
  );
}

const SkillsContents = ({ payload, type, onClick, onClear, isLoading }) => {
  if (isLoading)
    return (
      <Container>
        <h1>Loading..</h1>
      </Container>
    );

  return (
    <Container data-testid="list-skills">
      <Button
        type={type === "" ? "secondaryActive" : "secondary"}
        onClick={() => onClear()}
      >
        All
      </Button>
      {payload?.results.map((item, i) => {
        const pokemonType = item.name;
        const pokemonUrl = item.url;
        const activeButton = type === pokemonType;
        return (
          <Button
            type={activeButton ? "secondaryActive" : "secondary"}
            data-testid={`skill-${pokemonType}`}
            key={i}
            onClick={() => onClick(pokemonType, pokemonUrl)}
          >
            {textToCapitalize(pokemonType)}
          </Button>
        );
      })}
    </Container>
  );
};
