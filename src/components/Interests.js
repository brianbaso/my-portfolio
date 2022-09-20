import * as React from "react"
import '../index.css'
import {useState} from "react";

const data = {
    "career": "The next 3-5 years I’d like to continue to improve as a full stack engineer. Ideally I’d like to become an expert at JavaScript and React, but I’m open to all full-stack app development technologies. Whether it’s taking an app from zero to one, or building out a feature on a pre-existing app, coding is a passion of mine and I am grateful for all the perks that come with being a software engineer.",
    "creative": "Outside of software, I like to spend most of my time creating art. Primarily music, but also other mediums like video, writing, and (especially) dancing. As a musician, I make alternative rock music with the guitar and piano. I am a big fan of music theory and I like to create interesting harmonies with sound. I also sing and enjoy writing songs that express the human experience in unique ways.",
    "entrepreneurial": "I usually always have a side project or two that I’m working on. A longer term goal of mine is to author technologies that could support future creators in the domains of art, health, or sustainability. I believe that as a developer, I am standing on the shoulders of giants. NPM, for example, allows me to leverage millions of lines of code written by others in order to create the future. The work of other humans inspires me and motivates me to want to give back and create the platforms of tomorrow.",
}

export const Interests = () => {
    const [interests, setInterests] = useState(data["career"])

    return (
        <>
            <div className="interests-list">
                <button className="interest-button" onClick={(() => setInterests(data["career"]))}>Career</button>
                <button className="interest-button" onClick={() => setInterests(data["creative"])}>Creative</button>
                <button className="interest-button" onClick={() => setInterests(data["entrepreneurial"])}>Entrepreneurial</button>
            </div>
            <p className="passage-text">{interests}</p>
        </>
    )
}

export default Interests