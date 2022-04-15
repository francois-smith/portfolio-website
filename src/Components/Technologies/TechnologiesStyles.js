import styled from "styled-components";

export const TechnologiesSection = styled.div`
    position: relative;
    height: auto;

    .TechName{
        font-family: ${props => props.theme.fonts.main};
        font-size: 20px;
    }

`;

export const TechSectionHeader = styled.p`
    font-family: ${props => props.theme.fonts.main};
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    padding-top: 35px;
    opacity: 60%;
`;

export const TechSection = styled.div`
    padding-bottom: 40px;
    position: relative;

`;

export const TechCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

export const TechCard = styled.div`
    text-align: center;
    padding-right: 45px;
    padding-left: 45px;
    transition: all 0.2s;

    svg {
        transform: scale(0.75);
        margin-left: 20px;
        margin-right: 20px;
        transition: all 0.4s;
    }
    img {
        transform: scale(0.75);
        padding-left: 20px;
        padding-right: 20px;
        transition: all 0.2s;
    }

    &:hover{
        transform: translateY(10px);
    }
`;