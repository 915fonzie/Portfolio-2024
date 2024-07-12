import React from 'react'
import Project from './Project/index'
import componentsImg from '../assets/components-library.png'
import quizzicalImg from '../assets/quizzical-app.png'

export default function Projects({projectsRef}) {
    return (
        <section className='projects-section' ref={projectsRef}>
            <h1 className='projects-heading section-heading'>Projects</h1>
            <Project
                    className="project project-align-left"
                    live="https://fonzies-component-examples.netlify.app/"
                    repo="https://github.com/915fonzie/quizzical-app/"
                    imgUrl={componentsImg}
                >
                    <Project.Title>Reusable Components</Project.Title>
                    <Project.Description>This project contains several reusable components that were built using React and CSS</Project.Description>
            </Project>
            <Project
                    className="project project-align-right"
                    live="https://fonzies-quizzical-app.netlify.app"
                    repo="https://github.com/915fonzie/components-library"
                    imgUrl={quizzicalImg}
                >
                    <Project.Title>Quizzical App</Project.Title>
                    <Project.Description>This project is a quiz app from a solo project on Scrimba. Uses public API to get questions on anime. Was built using React and CSS</Project.Description>
            </Project>
        </section>
    )
}