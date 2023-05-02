import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

export const Contents = styled.div`
  color: whitesmoke;
  text-shadow: 5px 5px 10px black;
  .title-home {
    font-size: ${(props) => props.theme.font.size.big};
    font-weight: 300;
    line-height: 1;
    letter-spacing: 1px;
  }
  .desc-home {
    font-size: ${(props) => props.theme.font.size.xsmall};
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 40px;
    letter-spacing: 2px;
  }
`;

export const Background = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Background Image",
}))`
  width: 50%;
  height: auto;
  flex: 1;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
