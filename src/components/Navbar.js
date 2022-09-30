import * as React from "react"
import '../index.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {FaHamburger} from 'react-icons/fa'
import {useState} from "react";
import { isMobile } from "react-device-detect";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="mobile-nav-toggle">
                <button className="mobile-nav-toggle-button" onClick={() => setIsOpen(!isOpen)}>
                    <FaHamburger fontSize="1.5rem"/>
                </button>
            </div>
            <div className="nav-flex-container" id={!isMobile ? "" : (isOpen ? "" : "nav-flex-container-hide")}>
                <div className="nav-item"><AnchorLink href='#home'>Home</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#skills'>Skills</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#education'>Education</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#experience'>Experience</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#projects'>Projects</AnchorLink></div>
                <div className="nav-item"><AnchorLink href='#interests'>Interests</AnchorLink></div>
                {/* <div className="nav-item">isOpen: {String(isOpen)}</div>
                <div className="nav-item">isOpen: {String(isOpen)}</div> */}
            </div>
        </>
    );
}

export default Navbar