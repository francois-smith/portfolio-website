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
