import React from 'react'

export default class videobg extends React.Component {
    render(){
        if (this.props.src){
            return(
                <div
                    className="c-project__videobg"
                >
                    <div
                        className="c-project__videofilter"
                    >
                    </div>
                    <div
                        className="c-project__videocontainer"
                    >
                        <video 
                            muted 
                            autoPlay 
                            loop 
                            playsInline 
                            className="c-project__videoasset"
                        >
                            <source
                                src={ this.props.src } 
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}