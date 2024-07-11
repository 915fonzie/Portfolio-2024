import React from 'react'
import useCheckVisibility from '../hooks/useCheckVisibility'
import profilePic from '../assets/profile-pic.png'
import htmlLogo from '../assets/html.svg'
import javascriptLogo from '../assets/javascript.svg'
import cssLogo from '../assets/css.svg'
import sassLogo from '../assets/sass.svg'
import reactLogo from '../assets/react.svg'

export default function About({ aboutRef }) {
    
    const aboutIsActive = useCheckVisibility(aboutRef)

    return (
        <section className='about' ref={aboutRef}>
            <h1 className='about-heading section-heading'>About</h1>
            <div className='about-content'>
                <div className={`about-info ${aboutIsActive && "about-info_fade-in"}`}>
                    <img src={ profilePic } className="profile-img"/>
                    <p>
                        I'm Alfonso Pruneda-Suarez. My friends call me "Fonzie", and it just kind of stuck.
                        I'm a Frontend Developer based in the United States that loves to code and build products with a
                        pleasant user experience. The current technologies I'm most familiar with are HTML, CSS, SASS, Javascript, and React.
                        Interested in working together? I'd love to hear from you. Feel free to reach out by email or through any of my socials.
                    </p>
                </div>
                <div className='skills'>
                    <div className={`skill-column-up ${aboutIsActive && 'fade-up'}`}>
                        <div className='skill-item'>
                            <img src={htmlLogo} className='logos'/>
                            <p>HTML</p>
                        </div>
                        <div className='skill-item'>
                            <img src={cssLogo} className='logos'/>
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className={`skill-column-down ${aboutIsActive && 'fade-down'}`}>
                        <div className='skill-item'>
                            <img src={sassLogo} className='logos'/>
                            <p>SASS</p>
                        </div>
                    </div>
                    <div className={`skill-column-up ${aboutIsActive && 'fade-up'}`}>
                        <div className='skill-item'>
                            <img src={javascriptLogo} className='logos'/>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='skill-item'>
                            <img src={reactLogo} className='logos'/>
                            <p>REACT</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}