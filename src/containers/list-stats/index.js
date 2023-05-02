import React from "react";
import { DetailStat } from "../../components";

export default function ListStats({ stats }) {
  const displayStats = stats?.map((item, i) => {
    return <DetailStat key={i} data={item} />;
  });

  return (
    <div>
      <h3>List Stats</h3>
      {displayStats}
    </div>
  );
}
