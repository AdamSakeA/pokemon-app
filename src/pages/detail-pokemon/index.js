import { useParams } from "react-router-dom";
// hookes
import { useGetPokemonBySearch } from "../../utils/hooks";
// component
import { DetailStat, Image, Layout } from "../../components";
// utils
import { textToCapitalize, imageLoader } from "../../utils/settings";
// container
import { ListAbilities, ListEffects, Species } from "../../containers";
// styles
import { Wrapper, Contents } from "./detailPokemon.styles";

export default function DetailPokemon() {
  const { pokemonId } = useParams();
  const {
    pokemonSearch: payload,
    isLoading,
    isError,
  } = useGetPokemonBySearch(`/detailPokemon/${pokemonId}`, pokemonId);

  // images
  const image = imageLoader(payload?.sprites.other.dream_world.front_default);
  // types
  const types = payload?.types.map((item, i) => {
    return <h3 key={i}>{textToCapitalize(item.type.name)}</h3>;
  });
  // species
  const species = payload?.species.name;

  return (
    <Layout title={`${textToCapitalize(pokemonId)}`}>
      {isLoading && <h2>Loading..</h2>}
      {isError && <h2>Something Wrong...</h2>}
      <Wrapper>
        <Image type="imageDetail" src={image} alt="pokemon" />
        <div className="wrapper-content">
          <h1>{textToCapitalize(payload?.name)}</h1>
          <div className="wrapper-types-container">{types}</div>
          <ListAbilities abilities={payload?.abilities} />
        </div>
      </Wrapper>
      <Contents>
        {/* left */}
        <div>
          <ListEffects effects={payload?.types} />
        </div>
        {/* right */}
        <div>
          <DetailStat stats={payload?.stats} />
          <Species data={species} />
        </div>
      </Contents>
    </Layout>
  );
}
