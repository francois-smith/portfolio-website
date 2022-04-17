import styled from "styled-components";


export const AboutSection = styled.div`
    background-color:  ${props => props.theme.colors.background1};
    height: auto;
`;

export const AboutParagraph = styled.p`
    padding-top: 20px;
    font-size: 20px;
    width: 55%;
    margin: auto;
    text-align: center;
    pointer-events: none;
`;

export const AboutCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
`;

export const AboutCard = styled.div`
    flex-basis: 35%;
    margin: 25px;
    transition: all 10s;

    &:hover div{
        transform: translateY(-10px);
    }
`;

export const AboutCardTitle = styled.div`
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    h3{
        letter-spacing: 0.15em;
        font-size: 28px;
        font-weight: 600;
        transform: translateX(35px);
        position: absolute;
    }
    img{
        background-blend-mode: luminosity;
        transition: all 0.3s;
    }
`;


export const AboutCardDescription = styled.p`
    font-weight: 300;
    font-size: 18px;
    padding-left: 40px;
    padding-top: 10px;
    pointer-events: none;
`;
