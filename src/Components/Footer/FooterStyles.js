import styled from "styled-components";

export const FooterSection = styled.div`
    background-color:  ${props => props.theme.colors.background1};
    font-family: Nunito, sans-serif;
    height: auto;

    a {
        text-decoration: none;
	    color:  ${props => props.theme.colors.text};
    }

    #legal {
        text-align: center;
        font-size: 18px;
        padding: 25px
    }
`;

export const FooterSocials = styled.div`
    text-align: center;
    padding-top: 20px;

    .svg_icon {
        margin: 15px;
        transform: scale(1.6);
    }

    .svg_icon:hover{
        color: ${props => props.theme.colors.primary};
    }
`;

export const FooterToTop = styled.div`
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.18em;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        margin-top: -5px;
        transition: all 0.3s;
    }

    p {
        padding-top: 15px;
    }

    a:hover svg{
        transform: translateY(-10px);
    }
`;