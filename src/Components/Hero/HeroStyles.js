import styled, { keyframes } from "styled-components";

export const Welcome = keyframes`
    0% {
        transform: translateY(60px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Name = keyframes`
    0% {
        transform: translateY(80px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;  

export const Dev = keyframes`
    0% {
        transform: translateY(100px);
    }

    40% {
        opacity: 0%;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`; 

export const HeroSection = styled.div`
    height: 800px;
    position: relative;
    pointer-events: none;

    svg {
        position: absolute;
        bottom: 0;
        margin-left: 70px;
    }

    .path {
        stroke-dasharray: 1500;
        stroke-dashoffset: 1500;
        animation: dash 2s linear forwards 1.25s;
    }
        
    @keyframes dash {
        to {
        stroke-dashoffset: 0;
        }
    }
`;

export const HeroInfo = styled.div`
    padding-left: 250px;
    padding-top: 22vh;
    margin-right: auto;
    font-family: Raleway, sans-serif;
    position: relative;

    #Welcome {
        opacity: 0;
        font-weight: bold;
        font-size: 40px;
        padding-bottom: 40px;
        animation: ${Welcome} 0.6s linear 0.5s forwards;
    } 

    #Name {
        opacity: 0;
        font-weight: bold;
        font-size: 80px;
        animation: ${Name} 0.7s linear 0.6s forwards;
    } 

    #Dev {
        opacity: 0;
        font-weight: bolder;
        font-size: 25px;
        color: #929292;
        margin-top: -10px;
        margin-left: 5px;
        animation: ${Dev} 0.8s linear 0.7s forwards;
    }
`;

export const HeroImage = styled.img`
    height: 35vw;
    position: absolute;
    bottom: 0px;
    right: 18vw;
    filter: blur(0.4px);
`;