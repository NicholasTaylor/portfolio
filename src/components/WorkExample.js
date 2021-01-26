import React from 'react';
import Videobg from './Videobg'

class WorkExample extends React.Component {

    render() { 
        return(
            <div
                className="c-slideContainer"
            > 
                {this.props.videobg ?
                    <Videobg
                        src={this.props.videobg}
                    />
                    :
                    ''
                }
                <div
                    className="c-slide"
                >
                    <div
                        className="c-slide__content"
                    >
                        <h1
                            className="c-slide__name"
                        >
                            {this.props.name}
                        </h1>
                        <div
                            className="c-slide__desc"
                        >
                            {this.props.desc}
                        </div>
                        {
                            this.props.btnLiveCopy && this.props.btnLiveHref ?
                                <div
                                    className="c-slide__btn"
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
                                    className="c-slide__btn"
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
        )
    }
}

export default WorkExample;