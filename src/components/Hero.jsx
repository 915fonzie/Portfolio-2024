import React from 'react'
import Canvas from './Canvas'
import { heroBg } from '../particles'
import arrowDownImg from '../assets/arrow-down.svg'

export default function Hero({homeRef, aboutRef}) {
    return (
        <div className='hero' ref={homeRef}>
        <Canvas canvas={heroBg} className="particles-container" id="hero-particles"/>
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
                    <div>
                        View My Work <img src={arrowDownImg} />
                    </div>
                </button>
        </div>
    </div>
    )
}