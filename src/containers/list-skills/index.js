import { Container, SkillsContainer } from "./pokemonSkills.styles";
import { Button } from "../../components";
import { ResponsiveSkills } from "./responsive-skills";

export default function ListSkills({ payload, type, setType, isLoading }) {
  // set type to null
  const onClear = () => {
    setType("");
  };

  const pokemonFilteredByType = (type) => {
    setType(type);
  };

  return (
    <SkillsContainer>
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
    <Container>
      <Button
        type={type === "" ? "secondaryActive" : "secondary"}
        onClick={() => onClear()}
      >
        All
      </Button>
      {payload?.results.map((item, i) => {
        const pokemonSkills =
          item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return (
          <Button
            type={type === item.name ? "secondaryActive" : "secondary"}
            key={i}
            onClick={() => onClick(item.name, item.url)}
          >
            {pokemonSkills}
          </Button>
        );
      })}
    </Container>
  );
};
