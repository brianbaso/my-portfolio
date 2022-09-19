import * as React from "react"
import '../index.css';
import Navbar from '../components/Navbar'
import me from '../images/me.png'
import AnchorLink from "react-anchor-link-smooth-scroll";


const IndexPage = () => {
  return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div id="home" className="section container home">
            <img className="avatar" src={me} alt="Brian" />
            <h1>Howdy, I'm Brian.</h1>
            <h2 className="section-subheading">Fullstack Engineer • Product Manager</h2>
            <p className="home-text">I started writing code back in 2017 after stumbling upon a hackathon as a pre-med major. From there,
              I explored avenues in software entrepreneurship and made the switch to study computer science.
              I recently graduated in December 2021 and now I am looking for a full-time software engineering role.
              I have 3+ years of experience developing web applications and would like to continue to sharpen
              that skill. In addition to coding, I also have unique experiences in
              product management and UI/UX design. These experiences have helped me act as an effective liaison between
              the different roles in a modern software team! Thanks for stopping by, I hope you enjoy my page.</p>
          </div>
          <div id="skills" className="section container skills">
            <h2 className="skills-heading">Skills</h2>
            <ul className="skills-list">
              <li className="skill-item">React</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express</li>
              <li className="skill-item">GraphQL</li>
              <li className="skill-item">Java</li>
              <li className="skill-item">HTML/CSS</li>
              <li className="skill-item">CSS Flexbox</li>
              <li className="skill-item">Figma</li>
            </ul>
          </div>
          <div id="education" className="section container education">
            <h1 className="section-title">Education</h1>
            <div className="resume-item">
              <h4>Graduated December 2021</h4>
              <h2>University of Central Florida</h2>
              <h3>B.S. Computer Science GPA: 3.5/4.0</h3>
              <ul>
                <li>Hackathon director (2 years), Web development & UI/UX design mentor</li>
              </ul>
            </div>
          </div>
          <div id="experience" className="section container experience">
            <h1 className="section-title">Experience</h1>
            <div className="resume-item">
              <h4>June 2022 – Present</h4>
              <h2>Software Engineer (Freelance)</h2>
              <h3>Watchovr</h3>
              <ul>
                <li>Developed forms with React that could perform CRUD operations to edit admin data for a school survey web app.</li>
                <li>Wrote GraphQL queries, mutations, and cloud functions to retrieve and edit data on a Parse backend.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>May 2020 – August 2020</h4>
              <h2>Program Manager Intern</h2>
              <h3>Microsoft</h3>
              <ul>
                <li>Defined a new API for the xCloud SDK allowing game developers to obtain a client’s mobile device location.</li>
                <li>Interviewed game studio developers to understand their process when testing Xbox console games on mobile devices, and then redesigned the xCloud testing dashboard UX based on the pain points identified.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>February 2018 – May 2020</h4>
              <h2>Development Director</h2>
              <h3>Knight Hacks Dev & Design Team</h3>
              <ul>
                <li>Founded the Knight Hacks development & design team at UCF, leading ten passionate student developers to create multiple hackathon software products using agile methods.</li>
                <li>Championed a new product vision for Knight Hacks by determining features and designing a modern UI/UX for the hackathon’s first ever iOS & Android mobile apps. Received 136 Apple App Store downloads and 110 Google Play Store downloads during the first year.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>May 2019 – August 2019</h4>
              <h2>Program Manager Intern</h2>
              <h3>Microsoft</h3>
              <ul>
                <li>Created user stories & feature specifications for a React web application to enable content moderation for the augmented reality mobile game, Minecraft Earth. This product allows moderators to handle any unsafe user-generated content on the game from millions of players upon release.</li>
                <li>Interviewed stakeholders and collaborated with Xbox Sr. PM to specify and accurately prioritize features for the minimum viable product, therefore maximizing the moderator's success and ultimately making Minecraft Earth safe for everyone.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>July 2018 – January 2019</h4>
              <h2>Software Engineering Intern</h2>
              <h3>Royal Bank of Canada</h3>
              <ul>
                <li>Developed and tested Java Spring microservices at RBC's innovation lab for disruptive financial technology projects.</li>
                <li>Saved my department approximately $10k/month by moderating the Microsoft Azure cloud subscriptions and deallocating resources that were no longer used.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>May 2018 – July 2018</h4>
              <h2>Software Engineering Intern</h2>
              <h3>Knightspeed Moving</h3>
              <ul>
                <li>Developed a React app that allows nontechnical managers to update job states fluently during their day-to-day operations.</li>
              </ul>
            </div>
          </div>
          <div id="projects" className="section container projects">
            <h1 className="section-title">Personal Projects</h1>
            <div className="resume-item">
              <h4>August 2022 – Present</h4>
              <h2>Personal Website (https://brianbaso.com/)</h2>
              <ul>
                <li>Personal website created with Create React App and deployed on Github Pages.</li>
                <li>Styled from scratch using CSS Flexbox to cleanly organize the layout.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>April 2022 – Present</h4>
              <h2>Fasttrak (https://fasttrak.it/)</h2>
              <ul>
                <li>A web application created with React, Chakra UI, and Supabase that allows musicians to privately share music in progress.</li>
              </ul>
            </div>
          </div>
          <div id="interests" className="section container interests">
            <h1 className="section-title">Interests</h1>
          </div>
        </div>
      </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
