import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .Card:hover .Card_Image{
        filter: brightness(0.5);
    }

    .Card {
        position: relative;
        overflow: hidden;
        z-index: 1;
        margin: 10px;
        padding: 0px 15px;
        transition: all 0.5s;
    }

    .Card_Type::after{
        content: "";
        margin-top: 3px;
        float: left;
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        width: 100%;
        height: 5px;
        border-radius: 5px;
        z-index: 1; 
        transition: width 500ms;
    }
    
    .Card_Body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        height: 320px;
        z-index: 1;
        overflow: hidden;
        border-radius: 10px;
    }
    
    .Card_Type {
        padding-top: 20px;
        font-family: ${props => props.theme.fonts.main};
        font-weight: normal;
        font-size: 22px;
        z-index: 1;
        pointer-events: none;
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
        pointer-events: none;
    }
    
    .Card:hover .Card_Description{
        transform: translateY(0px);
        opacity: 100%;
    }

    .Card:hover{
        transform: scale(1.03);
    }

    .Card_Image {
        position: absolute;
        height: 100%;
        z-index: 0;
    }

    .Btn {
        padding: 2px;
        background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        border-radius: 20px;
        z-index: 1;
        opacity: 0%;
        transition: opacity 400ms;

        &:hover{
            filter: brightness(0.8);
        }
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
    
    .hidden{
        display: none;
    }

    .Card_Body .Buttons{
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-around;
        width: 80%;
    }

    @media ${props => props.theme.breakpoints.md}{
        .Card{
            height: 500px;
        }

        .Card_Body {
            height: 500px;
            background-color: ${props => props.theme.colors.background2};
        }
        
        .Card_Description {
            opacity: 1;
            transform: translateY(200px);
        }

        .Card:hover .Card_Description{
            transform: translateY(200px);
        }

        .Card_Image{
            height: 320px;
        }

        .Btn {
            opacity: 1;
            &:hover{
                filter: brightness(0.8);
            }
        }

        .Card:hover .Card_Image {
            filter: brightness(1);
        }

        .Card:hover .Card_Description {
            transform: translateY(200px);
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        .Card{
            width: 90%;
            height: 400px;
        }

        .Card_Body {
            width: 100%;
            height: 400px;
            background-color: ${props => props.theme.colors.background2};
        }
        
        .Card_Description {
            opacity: 1;
            transform: translateY(120px);
        }

        .Card:hover .Card_Description{
            transform: translateY(120px);
        }

        .Card_Image{
            width: 100%;
            height: auto;
            padding-top: 10px;
        }

        .Card_Type {
            padding-top: 15px;
            font-size: 20px;
        }

        .Card_Body .Buttons{
            width: 90%;
        }

        .Card_Body .Buttons{
            bottom: 30px;
        }

        .Btn > span {
            padding: 0 8px;
            height: 40px;
        }
    }

    @media ${props => props.theme.breakpoints.xs}{
        .Card{
            width: 90%;
            height: 350px;
        }

        .Card_Body {
            width: 100%;
            height: 350px;
            background-color: ${props => props.theme.colors.background2};
        }

        .Card_Description{
            width: 90%;
            transform: translateY(75px);
        }

        .Card:hover .Card_Description{
            transform: translateY(75px);
        }

        .Card_Body .Buttons{
            width: 95%;
        }

        .Btn > span {
            padding: 0 8px;
            height: 40px;
            font-size: 18px;
        }
    }
`;

