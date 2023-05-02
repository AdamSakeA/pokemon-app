import { Waypoint } from "react-waypoint";

import ListPokedex from "../list-pokedex";

export default function PaginationPokedex(props) {
  const { payload, fetchNextPage, isFetching } = props;

  const onScroll = () => {
    return !isFetching ? fetchNextPage() : null;
  };

  const dataPokedex = payload?.map((item) =>
    item.map((pokemon) => (
      <ListPokedex name={pokemon.name} key={pokemon.name} />
    ))
  );

  return (
    <>
      {dataPokedex}
      <div>
        <Waypoint onEnter={onScroll} />
      </div>
    </>
  );
}
