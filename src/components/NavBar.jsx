import React from 'react'
import useCheckVisibility from '../hooks/useCheckVisibility'

export default function NavBar({ refs }) {

    const activeStyles = {
        color: "#138ee0"
    }

    return (
        <nav className='navbar'>
            <button
                onClick={() => {
                    refs.homeRef.current?.scrollIntoView({
                        behavior: "smooth"
                    })
                }}
                style={useCheckVisibility(refs.homeRef) ? activeStyles : {}}
            >
                Home
            </button>
            <button
                onClick={() => {
                    refs.aboutRef.current?.scrollIntoView({
                        behavior: "smooth"
                    })
                }}
                style={useCheckVisibility(refs.aboutRef) ? activeStyles : {}}
            >
                About
            </button>
            <button
                onClick={() => {
                    refs.projectsRef.current?.scrollIntoView({
                        behavior: "smooth"
                    })
                }}
                style={useCheckVisibility(refs.projectsRef) ? activeStyles : {}}
            >
                Projects
            </button>
            <button
                onClick={() => {
                    refs.contactRef.current?.scrollIntoView({
                        behavior: "smooth"
                    })
                }}
                style={useCheckVisibility(refs.contactRef) ? activeStyles : {}}
            >
                Contact
            </button>
        </nav>
    )
}