import styled from "styled-components";

export const ContactSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: auto;

    .success{
        display: none;
        visibility: hidden;
    }
    #invisible{
        display: none;
        visibility: hidden;
    }
`;

export const ContactHeader = styled.div`
    text-align: center;

    p {
        font-size: 18px;
    }
    #GetInTouch {
        font-size: 30px;   
        padding-bottom: 10px
    }
    pointer-events: none;

    @media ${props => props.theme.breakpoints.sm}{
        padding-top: 20px;

        p {
            padding: 0px 40px 10px;
        }
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;

    @media ${props => props.theme.breakpoints.xl}{
        flex-direction: column;
        margin-top: 30px;
    }
`;

export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.breakpoints.md}{
        margin-bottom: 30px;
    }
`;

export const ContactType = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a{
        text-decoration: none;
        font-style: normal;
        color: ${props => props.theme.colors.text};
    }

    *{
        margin-left: 10px;
        margin-bottom: 60px;
    }

    @media ${props => props.theme.breakpoints.xl}{
        justify-content: center;

        *{
            margin-bottom: 20px;
        }

        svg{
            display: none;
        }
    }
`;

export const ContactForm = styled.form`
    margin-left: 50px;
    margin-top: 20px;

    #Message span {
        margin-top: 70px;
    }

    @media ${props => props.theme.breakpoints.xl}{
        display: flex;
        flex-direction: column;
        margin-left: 0px;
        margin-top: 0px;
        align-items: center;

        #Message span {
            margin-top: 0px;
        }

        #Message::after{
            top: 80%;
        }
    }

    @media ${props => props.theme.breakpoints.xl}{
        #Message span {
            margin-top: 20px;
        }
    }
`;

export const InputType = styled.input`
    position: relative;
    font-size: 18px;
    border: 0;
    padding: 5px;
    margin-right: 20px;
    border-bottom: 2px solid #666;
    background-color: rgba(0,0,0,0);
    color: ${props => props.theme.colors.text};
    font-weight: 300;
    z-index: 1;

    @media ${props => props.theme.breakpoints.xl}{
        margin-bottom: 35px;
        width: 200%;
    }

    @media ${props => props.theme.breakpoints.xl}{
        margin-bottom: 45px;
    }

    @media ${props => props.theme.breakpoints.sm}{
        width: 100%;
    }
`;

export const FormMessage = styled.textarea`
    font-size: 18px;
    border: 0;
    margin-top: 70px;
    padding: 5px;
    border-bottom: 2px solid #666;
    background-color: ${props => props.theme.colors.background2};
    width: 100%;
    color: ${props => props.theme.colors.text};
    z-index: 1;
    font-weight: 300;

    @media ${props => props.theme.breakpoints.xl}{
        margin-top: 0px;
    }

    @media ${props => props.theme.breakpoints.xl}{
        margin-top: 20px;
    }

    span{
        margin-top: 2px;
    }
`;

export const FormButton = styled.input`
    background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
    cursor: pointer;
    display: inline-block;
    padding: 8px 35px 8px 35px;
    border-radius: 6px;
    color: ${props => props.theme.colors.text};
    border: none;
    margin-top: 50px;
    margin-bottom: 60px;

    &:hover{
        filter: brightness(0.8);
    }

    @media ${props => props.theme.breakpoints.sm}{
        margin-top: 20px;
        margin-bottom: 35px;
    }
`;

export const FormInputsContainer = styled.div`
    display: flex;

    @media ${props => props.theme.breakpoints.xl}{
        flex-direction: column;
        width: 50%;
    }

    @media ${props => props.theme.breakpoints.lg} {
        width: 70%;
    }

    @media ${props => props.theme.breakpoints.sm}{
        width: 110%;
        padding-left: 20%;
    }

    @media ${props => props.theme.breakpoints.xs}{
        padding-left: 10%;
    }
`;

export const FormInput = styled.div`
    position: relative;

    span {
        position: absolute;
        z-index: 0;
        left: 0;
        transition: all 0.15s;
    }

    &:after{
        content: attr(error-value);
        position: absolute;
        left: 0;
        top: 102%;
        color: #ff3333;
        font-size: 18px;
    }

    @media ${props => props.theme.breakpoints.xl}{
        width: 50%;
        padding-bottom: 20px;

        &:after{
            top: 45%;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        span {
            bottom: 75%;
        }

        &:after{
            top: 40%;
        }
        width: 80%;
    }

    @media ${props => props.theme.breakpoints.xs}{
        width: 90%;
    }
`;

export const ContactSuccess = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-weight: 400;
        font-size: 55px;
        padding-bottom: 20px;
    }

    p{
        padding-bottom: 55px;
    }

    @keyframes show {
        0%{
            opacity: 0;
            transform: translateY(-50px);
        }

        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @media ${props => props.theme.breakpoints.md}{
        p{
            width: 80%;
            text-align: center;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        h2{
            font-size: 40px;
            padding-bottom: 20px;
        }

        p{
            font-size: 18px;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        h2{
            font-size: 32px;
            padding-bottom: 20px;
        }

        p{
            font-size: 16px;
        }
    }

    pointer-events: none;
`;