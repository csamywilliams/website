import React, { Component } from 'react';
import styled from 'styled-components';

const Preview = styled.div`
    width: 370px;
`;

const Title = styled.h3`
    color: #2D1710;
`;

const TitleLink = styled.a`
    color: #2D1710;
    text-decoration: none;
`;

const Summary = styled.p`
    color: #2D1710;
    display: block;
`;

const Button = styled.button`
    background-color: #EED093;
    color: #2D1710;
    border-radius: 10px;
    border: none;
    padding: 1em;
    cursor: pointer;
`;
 
 
class PostPreview extends Component {
 
  render() {
 
    const imageName = "./images/test.png";
    const imageAlt = "A picture";
    const title = "A specific title";
    const summary = "a small summary of the text chopped off.";
 
    return (
        <Preview>
            <TitleLink href="/">
                <img src={ imageName } alt={ imageAlt } />
                <Title>{ title }</Title>
            </TitleLink>
            <Summary>{ summary }</Summary>
            <Button>READ MORE</Button>
        </Preview>
    );
  }
 
}

export default PostPreview;