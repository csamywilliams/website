import React, { Component } from 'react';
import {Header, LogoLink, Logo, Menu, MenuItem, Hamburger, MenuLink } from './HeaderBar.styles';
import  './menu.css';
import logo from './Logo.png';

class HeaderBar extends Component {

    constructor(props) {
        super(props);
        this.state = {active: false};

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => ({
            active: !state.active
        }));
    }

    render() {
        return (
            <Header>
                <LogoLink className={this.state.active ? 'hideLogo': 'showLogo'} href="/" >
                    <Logo src={logo} alt="Bees of Bryncoch logo"/>
                </LogoLink>
                <Menu className={this.state.active ? 'showMenu': 'hideMenu'}>
                    <MenuItem>
                        <MenuLink href="/about">ABOUT</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/blog">BLOG</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/gallery">GALLERY</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/review">REVIEWS</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/contact">CONTACT</MenuLink>
                    </MenuItem>
                </Menu>
                <Hamburger onClick={this.toggleMenu}>
                    
                </Hamburger>
            </Header>       
        )
    }
}

export default HeaderBar;