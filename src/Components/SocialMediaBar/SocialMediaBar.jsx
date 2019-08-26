import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import KeepInTouch from '../KeepInTouch/KeepInTouch';
import { SocialBarLayout } from '../KeepInTouch/KeepInTouch.styles';
import media from '../../Utilities/MediaQueries';

export const Bar = styled.header`
    background: ${props => props.theme.navbar.bg};
    height: 10vh;
    min-height: 6vh;
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    ${media.phone`
        height: 8vh;
    `}
`;

class SocialMediaBar extends Component {
    render() {
        return (
            <Bar>
                <KeepInTouch layout={SocialBarLayout} color={theme.main.icons.bar.color} />
            </Bar>       
        )
    }
}

export default SocialMediaBar;