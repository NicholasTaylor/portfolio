import React from "react"
import "../css/bootstrap-reboot.min.css"
import "../scss/site.scss"

export default function Home() {
  return (
    <div
      className="l-container"
      style={{
        fontFamily:'carlmarx'
      }}
    >
      <div
        className="l-compContainer"
      >
        <div>
          Hello world
        </div>
        <p>
        </p>
      </div>
      <div
        className="l-compContainer c-workExample"
      >
        <h1>
          HumbleBike
        </h1>
        <p>
          A no-frills React-based single-page app for CitiBike users with slow connections. But even if you have good signal, don't miss out on the e-bike filter!
        </p>
        <a
          href="#"
        >
          Try It Out!
        </a>
        <a
          href="#"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  )
}
