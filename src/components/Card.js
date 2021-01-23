import React from "react"
import Intro from "./Intro"
import WorkExample from "./WorkExample"

class Card extends React.Component {
    render(){
        let cardout;
        if (this.props.type === 'Intro'){
            cardout = <Intro />
        } else {
            cardout = <WorkExample {...this.props} />
        }
        return (
            <div>
                {cardout}
            </div>
        );
    }
}

export default Card;