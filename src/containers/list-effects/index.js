import React from "react";
import Effects from "../effects";

export default function ListEffects({ effects }) {
  const effect = effects?.map((item, i) => {
    return <Effects key={i} effect={item.type.name} />;
  });

  return (
    <div>
      <h2>List Effect</h2>
      {effect}
    </div>
  );
}
