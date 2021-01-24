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
                className="c-mainmenu__headline"
            >
                Hi! I'm Nick!
            </div>
            <div
                className="c-mainmenu__link"
            >
                <Link
                    to="/works/"
                >
                    Projects
                </Link>
            </div>
            <div
                className="c-mainmenu__link"
            >
                <Link
                    to="/works/"
                >
                    About Me
                </Link>
            </div>
            <div
                className="c-mainmenu__link"
            >
                <Link
                    to="/works/"
                >
                    Contact
                </Link>                                
            </div>
        </div>
    </div>
  )
}