import styled, { keyframes} from "styled-components";

export const FadeIn = keyframes`
    from {
        transform: translateY(-24px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 200px;
    padding-right: 200px;
    align-items: center;
    padding-top: 20px;
    
    a{
        text-decoration: none;
        color:  ${props => props.theme.colors.text};
    }

    li {
        list-style: none;
    }

    img {
        height: 100px;
    }
`;

export const NavigationLinks = styled.div`
    display: flex;
    align-items: center;

    li {
        padding-left: 40px;
        opacity: 0;
    }

    .first{animation: ${FadeIn} 0.2s linear forwards;}
    .second{animation: ${FadeIn} 0.2s linear 0.1s forwards;}
    .third{animation: ${FadeIn} 0.2s linear 0.2s forwards;}
    .fourth{animation: ${FadeIn} 0.2s linear 0.3s forwards;}
`;

export const NavigationSocials = styled.div`
    align-items: center;
    display: flex;

    .svg_icon {
        margin-left: 15px;
        padding-top: 2px;
        transform: scale(2.5);
    }

    .first{animation: ${FadeIn} 0.2s linear forwards;}
    .second{animation: ${FadeIn} 0.2s linear 0.2s forwards;}
    .third{animation: ${FadeIn} 0.2s linear 0.4s forwards;}
`;

export const Link = styled.a`
    position: relative;
    display: inline-block;
    transition: color .2s ease;
    text-decoration: none;
    margin-bottom: 10px;
    color:  ${props => props.theme.colors.text};

    &:hover{
        color: #666;

        &::after, &::before {
        width: 100%;
        left: 0;
        }
    }

    &::after, &::before {
        content: ''; 
        position: absolute;
        top: calc(100% + 5px);
        width: 0;
        right: 0;
        height: 3px;
    }
    
    &::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: ${props => props.theme.colors.accent};
    }
    
    &::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: ${props => props.theme.colors.primary};
    }
`;

export const Social = styled.a`
    opacity: 0;
    margin-right: 40px;
    position: relative;
    display: inline-block;
    color:  ${props => props.theme.colors.text};

    &:hover{
        color: #666;

        span::after, span::before {
            width: 65%;
            left: 0;
        }
    }

    span::after, span::before {
        content: ''; 
        position: absolute;
        top: calc(100% + 2px);
        width: 0;
        right: 0;
        height: 3px;
    }
    
    span::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: ${props => props.theme.colors.accent};
    }
    
    span::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: ${props => props.theme.colors.primary};
    }

    &:hover{
        .svg_icon {
            color: ${props => props.theme.colors.primary};
        }
    }
`;