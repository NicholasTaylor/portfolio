import React from 'react';

class Intro extends React.Component {
    render(){
        return (
            <div
            className="c-slide"
            >
                <div
                    className="c-slide__content"
                >
                    <div
                        className="c-slide__greeting"
                    >
                        Hello world
                    </div>
                    <div
                        className="c-slide__desc"
                    >
                        Lorem Ipsum.
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;