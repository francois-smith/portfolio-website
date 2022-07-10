import styled from "styled-components";

export const TechnologiesSection = styled.div`
    position: relative;
    height: auto;

    .TechName{
        font-family: ${props => props.theme.fonts.main};
        font-size: 20px;
        pointer-events: none;
    }

    @media ${props => props.theme.breakpoints.md}{      
        .TechName{
            font-size: 18px;
        }
    }
`;

export const TechSectionHeader = styled.p`
    font-family: ${props => props.theme.fonts.main};
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    padding-top: 35px;
    opacity: 60%;
    pointer-events: none;

    @media ${props => props.theme.breakpoints.xxl}{
        font-size: 26px;
    }

    @media ${props => props.theme.breakpoints.md}{
        font-size: 22px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        font-size: 26px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        font-size: 22px;
    }
`;

export const TechSection = styled.div`
    padding-bottom: 40px;
    position: relative;
`;

export const TechCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;

    @media ${props => props.theme.breakpoints.sm}{
        flex-wrap: wrap;
    }
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
        transform: translateY(-10px);
    }

    @media ${props => props.theme.breakpoints.md}{
        padding-right: 30px;
        padding-left: 30px;

        svg {
            transform: scale(0.5);
            padding: 0px;
            margin: 0px;
        }
        img {
            transform: scale(0.5);
            padding: 0px;
            margin: 0px;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        padding-right: 25px;
        padding-left: 25px;
        flex-basis: 35%;
        padding-top: 10px;
    }
`;