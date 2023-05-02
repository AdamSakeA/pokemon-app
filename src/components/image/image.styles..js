import styled, { css } from "styled-components";

export const ImageContainer = styled.img`
  ${(props) => props.type && TYPE[props.type]}
  object-fit: contain;
`;

const TYPE = {
  imageCard: css`
    width: 200px;
    height: 150px;
    &:hover {
      -webkit-filter: drop-shadow(5px 8px 5px rgb(53, 53, 53));
      filter: drop-shadow(5px 8px 5px rgb(53, 53, 53));
    }
  `,
  imageDetail: css`
    width: 400px;
    height: 300px;
    @media (max-width: 425px) {
      width: 200px;
      height: 150px;
    }
  `,
  imageError: css`
    object-fit: cover;
  `,
};
