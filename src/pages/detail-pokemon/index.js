import { useParams } from "react-router-dom";
// hookes
import { useGetPokemonBySearch } from "../../utils/hooks";
// component
import { Image, Layout } from "../../components";
// utils
import { textToCapitalize, imageLoader } from "../../utils/settings";
// container
import { ListAbilities, ListEffects, ListStats } from "../../containers";
// styles
import { Wrapper } from "./detailPokemon.styles";

export default function DetailPokemon() {
  const { pokemonId } = useParams();
  const {
    pokemonSearch: payload,
    isLoading,
    isError,
  } = useGetPokemonBySearch(`/detailPokemon/${pokemonId}`, pokemonId);

  const image = imageLoader(payload?.sprites.other.dream_world.front_default);
  const types = payload?.types.map((item, i) => {
    return <p key={i}>{textToCapitalize(item.type.name)}</p>;
  });

  return (
    <Layout title={`${textToCapitalize(pokemonId)}`}>
      {isLoading && <h2>Loading..</h2>}
      {isError && <h2>Something Wrong...</h2>}
      <Wrapper>
        <div className="wrapper-content">
          <h1>{textToCapitalize(payload?.name)}</h1>
          <div className="wrapper-types-container">{types}</div>
        </div>
        <Image type="imageDetail" src={image} alt="pokemon" />
      </Wrapper>
      <ListAbilities abilities={payload?.abilities} />
      <ListEffects effects={payload?.types} />
      <ListStats stats={payload?.stats} />
    </Layout>
  );
  // const [detailPokemon, setDetailPokemon] = useState({
  //   dataPokemon: [],
  //   abilities: [],
  //   types: [],
  //   stats: [],
  // });
  // const { pokemonId } = useParams();
  // useEffect(() => {
  //   const getDetailPokemon = async (name) => {
  //     await axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  //       .then((response) => {
  //         setDetailPokemon({
  //           dataPokemon: [response.data],
  //           abilities: response.data.abilities.map((item) => item.ability.name),
  //           types: response.data.types,
  //           stats: response.data.stats,
  //         });
  //       })
  //       .catch((error) => {
  //         if (error) {
  //           console.log(error.response.data);
  //         }
  //       });
  //   };
  //   getDetailPokemon(pokemonId);
  // }, [pokemonId]);
  // return (
  //   <div className="detail-pages">
  //     <Navbar />
  //     {detailPokemon.dataPokemon.map((item, i) => {
  //       const pokemonName =
  //         item.name.charAt(0).toUpperCase() + item.name.slice(1);
  //       return (
  //         <div className="detail-pokemon container" key={i}>
  //           <div className="head-detail">
  //             <img src={item.sprites.other.home.front_default} alt="poke-img" />
  //             <div className="desc-head-detail">
  //               <h1 className="title-detail">{pokemonName}</h1>
  //               <div className="desc-detail">
  //                 {item.types.map((item, i) => {
  //                   const skillsName =
  //                     item.type.name.charAt(0).toUpperCase() +
  //                     item.type.name.slice(1);
  //                   return (
  //                     <h3 className="title-desc-detail" key={i}>
  //                       {skillsName}
  //                     </h3>
  //                   );
  //                 })}
  //               </div>
  //             </div>
  //           </div>
  //           <StatsDetailPokemon stats={detailPokemon.stats} />
  //           <AbilityDetailPokemon ability={detailPokemon.abilities} />
  //           <div className="effect-stats-container">
  //             <EffectDetailPokemon types={detailPokemon.types} />
  //           </div>
  //         </div>
  //       );
  //     })}
  //     <Footer />
  //   </div>
  // );
}
