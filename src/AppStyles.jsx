import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize};

.container {
    display: flex;
    margin-top: 10px;
}

`;