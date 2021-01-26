import React from 'react'

export default class videobg extends React.Component {
    render(){
        return(
            <div
                className="l-videobgcontainer"
            >
                <div
                    className="c-filter"
                >
                </div>
                <div
                    className="c-videobg"
                >
                    <video 
                        muted 
                        autoPlay 
                        loop 
                        playsInline 
                        className="c-videobg__video"
                    >
                        <source
                            src={ this.props.src } 
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        )
    }
}