import React from "react"

export default class AboutImg extends React.Component {
  render() {
    return (
      <div
        className="c-aboutme__listItem"
      >
        <img
          src={this.props.src}
          className="c-aboutme__listImg"
          alt={this.props.alt}
          title={this.props.alt}
        />
      </div>
    )
  }
}
