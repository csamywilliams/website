import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import KeepInTouch from '../KeepInTouch/KeepInTouch';
import { SocialBarLayout } from '../KeepInTouch/KeepInTouch.styles';

export const Bar = styled.header`
    background: ${props => props.theme.navbar.bg};
    height: 7vh;
    min-height: 6vh;
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
`;

class SocialMediaBar extends Component {
    render() {
        return (
            <Bar>
                <KeepInTouch layout={SocialBarLayout} color={theme.main.icons.bar.color} size={theme.main.icons.bar.size}/>
            </Bar>       
        )
    }
}

export default SocialMediaBar;