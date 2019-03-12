import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.header`
    background: #EED093;
    height: 3vh;
    min-height: 3vh;
    text-align: right;
    padding: 1em 1em 0 0;
`;
 
class SocialMediaBar extends Component {
    render() {
        return (
            <Bar>
                <i className="fab fa-twitter"></i>
            </Bar>       
        )
    }
}

export default SocialMediaBar;