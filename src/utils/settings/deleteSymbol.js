export const deleteSymbol = (text) => {
  if (text.includes("_")) {
    return text?.charAt(0).toUpperCase() + text?.slice(1).split("_").join(" ");
  }
  return text?.charAt(0).toUpperCase() + text?.slice(1).split("-").join(" ");
};
