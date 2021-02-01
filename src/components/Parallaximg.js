import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import quotusStupidus from "../images/quotusStupidus.png"

export default class Parallaximg extends React.Component {
    render(){
        const renderSpeed = this.props.speed ? this.props.speed : .15
        const renderOffset = this.props.offset ? this.props.index + this.props.offset : this.props.index + .15
        if (this.props.img){
            return(
                <ParallaxLayer
                  offset={renderOffset}
                  speed={renderSpeed}
                  className="c-slide__paraobj"
                >
                  <img 
                    src={this.props.img.publicURL}
                    style={{
                      "width": "75%",
                      "height": "auto"
                    }}
                  />
                </ParallaxLayer>
            );
        } else {
          return null;
        }
    }
}