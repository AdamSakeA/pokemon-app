import { useState } from "react";
import {
  Responsive,
  Title,
  IconClose,
  IconOpen,
} from "./responsiveSkills.styles";

import { textToCapitalize } from "../../../utils/settings/textToCapitalize";

export const ResponsiveSkills = ({ payload, type, onClick, onClear }) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prevToggle) => !prevToggle);
  };

  const DataSkills = () => {
    return (
      <>
        <div
          className={`responsive-contents ${type === "" && "active"}`}
          onClick={() => onClear()}
        >
          All
        </div>
        {payload?.results.map((item) => {
          const pokemonSkills =
            item.name.charAt(0).toUpperCase() + item.name.slice(1);
          return (
            <div
              className={`responsive-contents ${
                type === item.name && "active"
              }`}
              key={item.name}
              onClick={() => onClick(item.name, item.url)}
            >
              {pokemonSkills}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Responsive>
      <Title>
        <h3>{type ? textToCapitalize(type) : "Skill List"}</h3>
        {isToggle ? (
          <IconOpen onClick={() => handleToggle()} />
        ) : (
          <IconClose onClick={() => handleToggle()} />
        )}
      </Title>
      {isToggle && <DataSkills />}
    </Responsive>
  );
};
