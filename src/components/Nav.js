import React from "react"
import { Link } from "gatsby"

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flagNav: false
        };
    }
    handleClick= () => {
        const flagNav = this.state.flagNav;
        const linetop = document.querySelector('.c-navicon__linetop');
        const linemiddle = document.querySelector('.c-navicon__linemiddle');
        const linebottom = document.querySelector('.c-navicon__linebottom');
        const nav = document.querySelector('.l-nav');
        if (this.state.flagNav === false){
            linetop.style.animationName = 'topnavon';
            linemiddle.style.animationName = 'middlenavon';
            linebottom.style.animationName = 'bottomnavon';
            nav.style.animationName = 'navon';
        } else {
            linetop.style.animationName = 'topnavoff';
            linemiddle.style.animationName = 'middlenavoff';
            linebottom.style.animationName = 'bottomnavoff';
            nav.style.animationName = 'navoff';
        }
        this.setState({flagNav: !flagNav})
    }

    render(){
        return(
            <div>
                <div
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
                            class="c-navicon__line c-navicon__linetop" 
                            y1="0.5" 
                            x2="26" 
                            y2="0.5"
                        />
                        <line 
                            class="c-navicon__line c-navicon__linemiddle" 
                            y1="10.5" 
                            x2="26" 
                            y2="10.5"
                        />
                        <line 
                            class="c-navicon__line c-navicon__linebottom" 
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
                            to="/work/"
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