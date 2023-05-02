import React from "react";
import { ImageContainer } from "./image.styles.";

export default function Image({ src, alt, type }) {
  return <ImageContainer src={src} alt={alt} type={type} />;
}
