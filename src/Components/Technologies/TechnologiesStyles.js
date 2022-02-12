import styled from "styled-components";

export const TechnologiesSection = styled.div`
    position: relative;
    height: auto;

    .TechName{
        font-family: ${props => props.theme.fonts.main};
        font-size: 24px;
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
    padding-bottom: 60px;
`;

export const TechCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const TechCard = styled.div`
    text-align: center;
    padding-right: 60px;
    padding-left: 60px;

    svg {
        margin-bottom: 15px;
    }
    img {
        margin-bottom: 15px;
    }
`;