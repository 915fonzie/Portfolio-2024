import React from 'react'
import Canvas from './Canvas'

export default function Hero({homeRef, aboutRef}) {
    return (
        <div className='hero' ref={homeRef}>
        <Canvas canvas="../../particles.json" className="particles-container" id="hero-particles"/>
        <div className='heading'>
                <h1 className='heading-line-1'>Hello, I'm <span>Fonzie</span>.</h1>
                <h1 className='heading-line-2'>I'm a Frontend Developer.</h1>
                <button
                    onClick={() => {
                        aboutRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                    className='hero-btn'
                >
                    View my work
                </button>
        </div>
    </div>
    )
}