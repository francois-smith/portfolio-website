import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .Card {
        overflow: hidden;
        z-index: 1;
        margin: 15px;
        padding: 15px;
    }
    
    .Card_Body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 28vw;
        height: 35vh;
        z-index: 1;
    }
    
    .Card_Type {
        padding-top: 20px;
        font-family: ${props => props.theme.fonts.main};
        font-weight: normal;
        font-size: 22px;
        z-index: 1;
    }
    
    .Card_Type::after {
        content: "";
        margin-top: 3px;
        float: left;
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        width: 100%;
        height: 5px;
        border-radius: 5px;
        z-index: 1;
    }
    
    .Card_Description {
        text-align: center;
        padding-top: 25px;
        word-wrap: break-word;
        width: 75%;
        z-index: 1;
        opacity: 0%;
        transform: translateY(150px);
        transition: all 500ms;
    }
    
    .Card:hover .Card_Description{
        transform: translateY(0px);
        opacity: 100%;
    }
    
    .Card_Image {
        position: absolute;
        width: 100%;
        z-index: 0;
        border-radius: 20px;
    }
    
`;

