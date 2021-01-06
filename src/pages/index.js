import React from "react"
import "../css/bootstrap-reboot.min.css"
import "../scss/site.scss"
import Intro from "../components/Intro.js"
import WorkExample from "../components/WorkExample.js"

export default function Home() {
  return (
    <div
      className="l-container"
    >
      <Intro />
      <WorkExample 
        name="HumbleBike"
        desc="A no-frills React-based single-page app for CitiBike users with slow connections. But even if you have good signal, don't miss out on the e-bike filter!"
        btnLiveCopy="Try It Out!"
        btnLiveHref="https://humble.bike"
        btnGitCopy="GitHub Repo"
        btnGitHref="https://github.com/NicholasTaylor/HumbleBike_v2"
      />
    </div>
  )
}
