import styled from "styled-components";

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 200px;
    padding-right: 200px;
    align-items: center;
    padding-top: 20px;

    a {
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
    }
`;

export const NavigationSocials = styled.div`
    align-items: center;
    display: flex;

    span {
        padding-right: 15px;
	    padding-left: 40px;
    }

    .svg_icon {
        padding-top: 2px;
        transform: scale(2.5);
    }
`;