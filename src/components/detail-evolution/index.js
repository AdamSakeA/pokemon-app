import { deleteSymbol, imageLoader } from "../../utils/settings";
import { Container, Contents, IconEvol } from "./detailEvolution.styles";
import Image from "../image";
import { useNavigate } from "react-router-dom";

export default function DetailEvolution({ data }) {
  const navigate = useNavigate();
  const image = data?.sprites.front_default;
  const types = data?.types.map((item) => {
    return <p key={item.type.name}>{deleteSymbol(item.type.name)}</p>;
  });

  const handleNavigate = (name) => {
    const navigateToDetailPokemon = `/pokedex/${name}`;
    navigate(navigateToDetailPokemon);
  };
  return (
    <Container
      data-testid="detail-evolution"
      onClick={() => handleNavigate(data.name)}
    >
      <Image type="imageEvolution" src={imageLoader(image)} alt="test" />
      <Contents>
        <h3>{deleteSymbol(data.name)}</h3>
        <div className="types">{types}</div>
      </Contents>
      <IconEvol />
    </Container>
  );
}
