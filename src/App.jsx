import React from 'react'
import Canvas from './components/Canvas'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import { mainBg } from './particles'
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
            <section className='contact' ref={contactRef}>Contact</section>
            <footer>Alfonso Pruneda © 2024</footer>
        </main>
    )
}