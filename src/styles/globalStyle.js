import { createGlobalStyle } from "styled-components";

// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap");
export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Poppins", sans-serif
    }

    body {
        background-color: black;
        color: ${(props) => props.theme.colors.text};
        max-width: 1240px;
        margin: auto;
    } 
`;
