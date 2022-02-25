import styled from "styled-components";

export const ContactSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: auto;
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
    font-size: 18px;
    border: 0;
    padding: 5px;
    margin-right: 20px;
    border-bottom: 2px solid #666;
    background-color: ${props => props.theme.colors.background2};
    color: ${props => props.theme.colors.text};
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
`;

export const FormButton = styled.input`
    background: linear-gradient(to right, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
    cursor: pointer;
    display: inline-block;
    padding: 8px 35px 8px 35px;
    border-radius: 6px;
    color: ${props => props.theme.colors.text};
    border: none;
    margin-top: 30px;
    margin-bottom: 60px;
`;

export const FormInputsContainer = styled.div`
    display: flex;
`;

export const FormInput = styled.div`
    position: relative;

    span {
        position: absolute;
        display: inline-block;
    }

    @media ${props => props.theme.breakpoints.sm} {
        
    }
`;