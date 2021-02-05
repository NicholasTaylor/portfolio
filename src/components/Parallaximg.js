import React from 'react'
import {ParallaxLayer} from 'react-spring/renderprops-addons'

export default class Parallaximg extends React.Component {
    render(){
        const renderSpeed = this.props.speed ? this.props.speed : .15;
        const renderOffset = this.props.offset ? this.props.index + this.props.offset : this.props.index + .15;
        const allX = ['left', 'center', 'right'];
        const align = this.props.align && allX.indexOf(this.props.align.toLowerCase()) !== -1 ? ` c-slide__paraobj--${this.props.align.toLowerCase()}` : '';        
        if (this.props.img){
            return(
                <ParallaxLayer
                  offset={renderOffset}
                  speed={renderSpeed}
                  className={`c-project__paraobj${align}`}
                >
                  <img 
                    src={this.props.img.publicURL}
                    style={{
                      "width": "75%",
                      "height": "auto"
                    }}
                    alt=""
                  />
                </ParallaxLayer>
            );
        } else {
          return null;
        }
    }
}