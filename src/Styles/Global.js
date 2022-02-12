import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
        position: absolute;
        width: 100%;
    }

    body {
        background-color: ${props => props.theme.colors.background2};
        min-height: 100vh;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        font-family:  ${props => props.theme.fonts.main};
        font-weight: regular;
    }
    .Text-Gradient {
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .Section_Heading {
        padding-bottom: 50px;
        padding-left: 125px;
        padding-top: 50px;
        display: inline-block;
        font-size: 40px;
        line-height: 128%;
        letter-spacing: 0.22em;

        &::before {
            content: "";
            margin-bottom: 15px;
            float: left;
            background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
            width: 35%;
            height: 8px;
            border-radius: 5px;
            z-index: 1;
        }
    }
    .GradientUnderline{
        margin-top: 40px;
        display: block;
        margin-left:auto;
        margin-right:auto;
    }
    .Btn {
        position: absolute;
        bottom: 40px;
        left: 40%;
        display: inline-block;
        padding: 2px;
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        border-radius: 20px;
        cursor: pointer;
        z-index: 1;
        opacity: 0%;
        transition: opacity 1000ms;
    }
    .Card:hover .Btn {
        opacity: 100%;
    }
    .Btn > span {
        display: inline-block;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        border-radius: 18px;
        z-index: 1;
        color: white;
    }
`;

export default GlobalStyles;
