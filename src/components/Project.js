import React from "react"
import Videobg from './Videobg'

class Project extends React.Component {
    render(){
        const allX = ['left', 'center', 'right'];
        const allY = ['top', 'middle', 'bottom'];
        const xalign = this.props.xalign && allX.indexOf(this.props.xalign.toLowerCase()) != -1 ? ` c-project__contentx--${this.props.xalign.toLowerCase()}` : '';
        const yalign = this.props.yalign && allY.indexOf(this.props.yalign.toLowerCase()) != -1 ? ` c-project__contenty--${this.props.yalign.toLowerCase()}` : '';
        return(
            <div
            > 
                <Videobg
                    src={this.props.videobg}
                />
                <div
                    className="c-project__content"
                >
                    <div
                        className={`c-project__contentx${xalign}`}
                    >
                        <div
                            className={`c-project__contenty${yalign}`}
                        >
                            <h1
                                className="c-project__name"
                            >
                                {this.props.name}
                            </h1>
                            <div
                                className="c-project__desc"
                            >
                                {this.props.desc}
                            </div>
                            {
                                this.props.btnLiveCopy && this.props.btnLiveHref ?
                                    <div
                                        className="c-project__btn"
                                    >
                                        <a
                                            href={this.props.btnLiveHref}
                                        >
                                            {this.props.btnLiveCopy}
                                        </a>
                                    </div>
                                    :
                                    ''
                            }
                            {
                                this.props.btnGitCopy && this.props.btnGitHref ?
                                    <div
                                        className="c-project__btn"
                                    >
                                        <a
                                            href={this.props.btnGitHref}
                                        >
                                            {this.props.btnGitCopy}
                                        </a>
                                    </div>
                                :
                                ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;