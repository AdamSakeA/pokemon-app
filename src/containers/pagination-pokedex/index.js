import { Waypoint } from "react-waypoint";

import ListPokedex from "../list-pokedex";

export default function PaginationPokedex(props) {
  const { payload, fetchNextPage, isFetching } = props;
  const onScroll = () => {
    return !isFetching ? fetchNextPage() : null;
  };
  const dataPokedex = payload?.map((item) => {
    return <ListPokedex name={item.name} key={item.name} />;
  });

  return (
    <>
      {dataPokedex}
      <div data-testid="waypoint">
        <Waypoint onEnter={onScroll} />
      </div>
    </>
  );
}
