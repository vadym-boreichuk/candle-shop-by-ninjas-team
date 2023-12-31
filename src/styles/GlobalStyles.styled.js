import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        /* background-color: #fdeae1; */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background-color: #fff;
        color: #000;
        overflow-y: scroll;    
        overflow: overlay;
    }  

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    };
`;
