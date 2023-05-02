import error from "../../assets/error.png";

export const imageLoader = (img) => {
  if (img) return img;
  return error;
};
