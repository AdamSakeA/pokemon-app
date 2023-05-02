import React from "react";
import { ButtonContainer } from "./button.styles";

export default function Button(props) {
  const { onClick, children, type = "primary", disabled } = props;
  return (
    <ButtonContainer onClick={onClick} type={type} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
}
