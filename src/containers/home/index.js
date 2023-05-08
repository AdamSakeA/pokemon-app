import React from "react";
import { useNavigate } from "react-router-dom";
import imageBg from "../../assets/pokeball-bg.jpeg";
import { Container, Background, Contents } from "./home.styles";
import { Button } from "../../components";

export default function Home() {
  const navigate = useNavigate();

  // go to pokedex page
  const setLink = () => {
    navigate("/pokedex");
  };

  return (
    <Container>
      <Contents>
        <h1 className="title-home">Wanna Know Any Pokemon?</h1>
        <p className="desc-home">
          We share about pokemon monsters by skills in pokedex, if you want to
          know pokemon detail just click the card
        </p>
        <Button onClick={() => setLink()}>Go to Pokedex</Button>
      </Contents>
      <Background src={imageBg} />
    </Container>
  );
}
