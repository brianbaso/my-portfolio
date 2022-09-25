import * as React from "react"
import '../index.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {FaHamburger} from 'react-icons/fa'
import {useState} from "react";
import { isMobile } from "react-device-detect";


export const Navbar = () => {
    const [isClosed, setIsClosed] = useState(false)

    console.log(isMobile, isClosed)
    return (
        <>
            <div className="mobile-nav-toggle">
                <button className="mobile-nav-toggle-button" onClick={() => setIsClosed(!isClosed)}>
                    <FaHamburger fontSize="1.5rem"/>
                </button>
            </div>
            <div className={isMobile && !isClosed ? "nav-flex-container-hide" : "nav-flex-container"}>
                <div className="nav-item"><AnchorLink href='#home'>Home</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#skills'>Skills</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#education'>Education</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#experience'>Experience</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#projects'>Projects</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#interests'>Interests</AnchorLink></div>
            </div>
        </>
    );
}

export default Navbar