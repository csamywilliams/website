import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './Logo.png';

const Header = styled.header`
    height: 12vh;
    min-height: 6vh;
    padding: .5em 1em .5em 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
`;

const LogoLink = styled.a`
    width: 8vw;
    height: 6vw;
    padding: 0 1em 0.5em 8em;
`;

const Menu = styled.ul`
    list-style: none;
    margin: 0; 
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;

    @media all and (max-width: 800px) {
        justify-content: space-around;
    }

    @media all and (max-width: 600px) {
        -webkit-flex-flow: column wrap;
        flex-flow: column wrap;
        padding: 0;
    }

    li {
        width: 5vw;
    }
`;

const MenuItem = styled.a`
    text-decoration: none;
    display: block;
    padding: 1em;
    color: #2D1710;

    :hover {
        background: darken(deepskyblue, 2%);
    }

    @media all and (max-width: 600px) {
        text-align: center; 
        padding: 10px;
        border-top: 1px solid rgba(255,255,255,0.3); 
        border-bottom: 1px solid rgba(0,0,0,0.1); 
    }
`;
 
class HeaderBar extends Component {
    render() {
        return (
            <Header>
                <LogoLink href="/" >
                    <Logo src={logo} alt="Bees of Bryncoch logo"/>
                </LogoLink>

                <Menu>
                    <li><MenuItem href="/about">ABOUT</MenuItem></li>
                    <li><MenuItem href="/blog">BLOG</MenuItem></li>
                    <li><MenuItem href="/gallery">GALLERY</MenuItem></li>
                    <li><MenuItem href="/review">REVIEWS</MenuItem></li>
                    <li><MenuItem href="/contact">CONTACT</MenuItem></li>
                </Menu>
            </Header>       
        )
    }
}

export default HeaderBar;