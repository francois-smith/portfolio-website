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
`;

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
`;

export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
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
`;

export const ContactForm = styled.form`
    margin-left: 50px;
    margin-top: 20px;

    #Message span {
        margin-top: 70px;
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
`;

export const FormInputsContainer = styled.div`
    display: flex;
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

    @media ${props => props.theme.breakpoints.sm} {
        
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
`;