import styled from "styled-components";

export const ContactSection = styled.div`
    background-color:  ${props => props.theme.colors.background2};
    height: auto;
    padding-bottom: 50px;

    .contact-divider{
        padding: 20px 0px 15px;
        display: flex;
        justify-content: center;

        img{
            width: 300px;
        }
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

export const ContactForm = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;