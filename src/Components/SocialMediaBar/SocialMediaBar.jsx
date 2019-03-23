import React, { Component } from 'react';
import styled from 'styled-components';

export const Bar = styled.header`
    background: ${props => props.theme.navbar.bg};
    height: 3vh;
    min-height: 3vh;
    text-align: right;
    padding: 1em 1em 0 0;
`;

class SocialMediaBar extends Component {
    render() {
        return (
            <Bar>
                
            </Bar>       
        )
    }
}

export default SocialMediaBar;