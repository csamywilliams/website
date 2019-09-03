import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Header = styled.nav`
    height: 12vh;
    min-height: 6vh;
    padding: .5em 1em .5em 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.navbar.border};
    align-items: center;
`;

export const Logo = styled.img`
    text-decoration: none;
    width: 40%;
    height: 100%;
`;

export const LogoLink = styled.a`
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
    text-decoration: none;
`;

export const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li {
        text-align: center;
        margin: 0;
    }

    ${media.tablet`
        list-style-type: none;
        display: none;
    `}

    ${media.phone`
        list-style-type: none;
        display: none;
    `}
`;

export const MenuItem = styled.li`
    li {
        text-align: center;
        margin: 0 auto;
    }
`;

export const MenuLink = styled.a`
    text-decoration: none;
    display: block;
    padding: 1em;
    color: ${props => props.theme.link.color};
    flex: 0 0 auto; 

    :hover {
        border-bottom: 5px ${props => props.theme.link.hover} solid;
    }
`;

export const Hamburger = styled.div`
    position: absolute;
    top: .3em;
    right: 2em;
    cursor: pointer; 
    font-size: 1.5em;
    display: none;

    &:before {
        content: "";
        position: absolute;
        top: 0.25em;
        left: 0;
        width: 1em;
        height: 0.125em;
        border-top: 0.375em double ${props => props.theme.hamburger.lines};
        border-bottom: 0.125em solid ${props => props.theme.hamburger.lines};
    }

    ${media.tablet`
        display: unset;
    `}

    ${media.phone`
        display: unset;
    `}
`;
