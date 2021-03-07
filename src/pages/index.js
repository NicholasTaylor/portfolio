import React from "react"
import { Link } from "gatsby"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"

export default function home() {
  return (
    <div
      className="l-container"
    >
        <div
            className="c-mainmenu"
        >
            <div
                className="c-mainmenu__title"
            >
                <div
                    className="c-mainmenu__headline"
                >
                    Hi! I'm Nick!
                </div>
                <div
                    className="c-mainmenu__copy"
                >
                    I'm a web developer
                </div>
            </div>
            <div
                className="c-mainmenu__link"
            >
                <Link
                    to="/works/"
                >
                    My Projects
                </Link>
            </div>
            <div
                className="c-mainmenu__link"
            >
                <Link
                    to="/aboutme/"
                >
                    A Little About Me
                </Link>
            </div>
            <div
                className="c-mainmenu__link"
            >
                <Link
                    to="/contact/"
                >
                    Let's Get in Touch
                </Link>                                
            </div>
        </div>
    </div>
  )
}