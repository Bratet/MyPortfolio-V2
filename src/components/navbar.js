import * as React from 'react'
import { useState, useEffect } from "react"
import "../styles/global.css"
import Fade from 'react-reveal/Fade' 


// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]');
  }
const Navbar = () => {
    
    // determined if page has scrolled
    const [state, setState] = useState({
        scrolled: false,
    });
    // determined if mobile nav bar is open
    const [navbarOpen, setNavbarOpen] = useState(false);

    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== state.scrolled) {
            setState({
            ...state,
            scrolled: !state.scrolled,
            });
        }
        };
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            // clean up the event handler when the component unmounts
            document.removeEventListener('scroll', handleScroll);
        };
    }, [state.scrolled]);
    
    return(
        <header data-active={state.scrolled}>
            <Fade top>
                <div className="flex flex-wrap py-2">
                    <div className="container m-auto mt-25 sm:px-12 md:px-8 max-w-screen-xl">
                        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 rounded">
                            <div className="w-full relative flex justify-between lg:w-auto px-5 lg:static lg:block lg:justify-start">
                                <a href = '#home' className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" style={{color: 'var(--primary)'}}>
                                    Ahmed Mrabet
                                </a>

                                {/* Mobile menu button */}
                                <button
                                    className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    {navbarOpen ? (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    ) : (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    )}
                                </button>
                            </div>

                            {/* nav bar content */}
                            <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                                <ul className="flex flex-col lg:flex-row list-none ml-auto"  style={{color: 'var(--primary)'}}>
                                    <li className="nav-item">
                                        <a href="#about" className="font-mono px-3 py-2 flex items-center text-sm leading-snug icon">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="#experience" className="font-mono px-3 py-2 flex items-center text-sm leading-snug icon">
  Experiences
</a>

                                    </li>
                                    <li className="nav-item"> 
                                        <a href="#project" className="font-mono px-3 py-2 flex items-center text-sm leading-snug icon">
                                            Projects
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href="#skills" className="font-mono px-3 py-2 flex items-center text-sm leading-snug icon">
                                            Skills
                                        </a>
                                    </li> */}
                                    <li className="nav-item">
                                        <a href="#contact" className="font-mono px-3 py-2 flex items-center text-sm leading-snug icon">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </Fade>
        </header>   
    )
}

export default Navbar