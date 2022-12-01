import React from "react"
import { Link } from "gatsby"

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flagNav: false
        };
    }
    handleClick = () => {
        const flagNav = this.state.flagNav;
        [document.querySelector('.c-navicon__linetop').style.animationName,document.querySelector('.c-navicon__linemiddle').style.animationName,document.querySelector('.c-navicon__linebottom').style.animationName,document.querySelector('.l-nav').style.animationName] = this.state.flagNav === false ? ['topnavon', 'middlenavon', 'bottomnavon', 'navon'] : ['topnavoff', 'middlenavoff', 'bottomnavoff', 'navoff'];
        this.setState({flagNav: !flagNav});
    }

    render(){
        return(
            <div>
                <div
                    aria-hidden="true"
                    className="l-navicon"
                    onClick={() => this.handleClick()}
                >
                    <svg 
                        id="c-navicon" 
                        data-name="c-navicon" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 26 21"
                    >
                        <line 
                            className="c-navicon__line c-navicon__linetop" 
                            y1="0.5" 
                            x2="26" 
                            y2="0.5"
                        />
                        <line 
                            className="c-navicon__line c-navicon__linemiddle" 
                            y1="10.5" 
                            x2="26" 
                            y2="10.5"
                        />
                        <line 
                            className="c-navicon__line c-navicon__linebottom" 
                            y1="20.5" 
                            x2="26" 
                            y2="20.5"
                        />
                    </svg>
                </div>
                <nav
                    className="l-nav"
                >
                    <div
                        className="c-nav__content"
                    >
                        <Link
                            className="c-nav__link"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="c-nav__link"
                            to="/works/"
                        >
                            Projects
                        </Link>
                        <Link
                            className="c-nav__link"
                            to="/aboutme/"
                        >
                            About Me
                        </Link>   
                        <Link
                            className="c-nav__link"
                            to="/contact/"
                        >
                            Contact
                        </Link>                                     
                    </div>
                </nav>
            </div>
        )
    }
}