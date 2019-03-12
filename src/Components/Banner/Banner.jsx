import React, { Component } from 'react';
import { Parallax, Image } from 'react-scroll-parallax';
 
class Banner extends Component {
    render() {
        return (
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                <Image src="./dandelion.jg" />
            </Parallax>        
        )
    }
}

export default Banner;