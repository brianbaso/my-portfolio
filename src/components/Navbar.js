import * as React from "react"
import '../index.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navbar = () => {
    return (
        <div className="nav-flex-container">
            <div className="nav-item"><AnchorLink href='#home'>Home</AnchorLink></div>
            <div className="nav-item"><AnchorLink href='#skills'>Skills</AnchorLink></div>
            <div className="nav-item"><AnchorLink href='#education'>Education</AnchorLink></div>
            <div className="nav-item"><AnchorLink href='#experience'>Experience</AnchorLink></div>
            <div className="nav-item"><AnchorLink href='#projects'>Projects</AnchorLink></div>
            <div className="nav-item"><AnchorLink href='#interests'>Interests</AnchorLink></div>
        </div>
    )
}

export default Navbar