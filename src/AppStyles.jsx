import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
${normalize};

`;

export const Container = styled.div`
display: flex;
margin-top: 10px;
`;