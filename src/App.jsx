import React from 'react'
import Canvas from './components/Canvas'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { mainBg } from './particles'
import facebookIcon from './assets/icons/facebook.svg'
import emailIcon from './assets/icons/email.svg'
import instagramIcon from './assets/icons/instagram.svg'
import githubIcon from './assets/icons/github.svg'
import linkedInIcon from './assets/icons/linkedin.svg'
import arrowUpIcon from './assets/arrow-up.svg'

import './styles/index.css'


export default function App() {

    const homeRef = React.useRef()
    const aboutRef = React.useRef()
    const projectsRef = React.useRef()
    const contactRef = React.useRef()

    return (
        <main className='home-container'>
            <div className='main-background'>
                <Canvas canvas={mainBg} className="particles-container" id="main-particles-bg"/>
            </div>
            <Hero aboutRef={aboutRef} homeRef={homeRef}/>
            <NavBar refs={{homeRef, aboutRef, projectsRef, contactRef}}/>
            <About aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <Contact contactRef={contactRef} />
            <footer>
                <button
                    onClick={() => {
                        homeRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                ><img src={arrowUpIcon} /></button>
                <div>
                    <a href="https://www.facebook.com/fonziepruneda" target="_blank"><img src={facebookIcon}/></a>
                    <a href="https://www.instagram.com/fonziepruneda/" target="_blank"><img src={instagramIcon}/></a>
                    <a href="https://www.linkedin.com/in/fonziepruneda/" target="_blank"><img src={linkedInIcon}/></a>
                    <a href="https://github.com/915fonzie/" target="_blank"><img src={githubIcon}/></a>
                    <a href="mailto:alfonso.pru@outlook.com"><img src={emailIcon}/></a>
                </div>
                <p>
                    Alfonso Pruneda-Suarez © 2024
                </p>
            </footer>
        </main>
    )
}