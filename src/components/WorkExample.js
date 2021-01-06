import React from 'react';
import { Link } from 'gatsby';

class WorkExample extends React.Component {
    render() {
        return(
            <div
                className="l-compContainer c-workExample"
            >
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.desc}
                </p>
                {
                    this.props.btnLiveCopy && this.props.btnLiveHref ?
                        <Link
                            to={this.props.btnLiveHref}
                        >
                            {this.props.btnLiveCopy}
                        </Link>
                        :
                        ''
                }
                {
                    this.props.btnGitCopy && this.props.btnGitHref ?
                        <Link
                            to={this.props.btnGitHref}
                        >
                            {this.props.btnGitCopy}
                        </Link>
                    :
                    ''
                }
            </div>
        )
    }
}

export default WorkExample;