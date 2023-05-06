import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Poppins", sans-serif
    }

    h1, h2, h3, h4, p {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: black;
        color: ${(props) => props.theme.colors.text};
        max-width: 1240px;
        margin: auto;
    } 
`;
