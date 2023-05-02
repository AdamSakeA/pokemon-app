import React from "react";

export default function DetailStat({ data }) {
  return (
    <div>
      <p>{data.stat.name}</p>
      <p>{data.base_stat}</p>
    </div>
  );
}
