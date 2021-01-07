import React from 'react';
import { Link } from 'gatsby';

class WorkExample extends React.Component {
    render() {
        return(
            <div
                className="c-slideContainer"
            >
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
                                    <Link
                                        to={this.props.btnLiveHref}
                                    >
                                        {this.props.btnLiveCopy}
                                    </Link>
                                </div>
                                :
                                ''
                        }
                        {
                            this.props.btnGitCopy && this.props.btnGitHref ?
                                <div
                                    className="c-slide__btn"
                                >
                                    <Link
                                        to={this.props.btnGitHref}
                                    >
                                        {this.props.btnGitCopy}
                                    </Link>
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