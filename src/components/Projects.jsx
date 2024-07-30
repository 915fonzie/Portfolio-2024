import React from 'react'
import Project from './Project/index'
import componentsImg from '../assets/components-library.png'
import quizzicalImg from '../assets/quizzical-app.png'
import DessertAppImg from '../assets/dessert-menu-app.png'
import clockAppImg from '../assets/clock-app-desktop-open.png'
import movieWatchlistImg from '../assets/movie-watchlist-app.png'
import exploreFashionImg from '../assets/explore-fashion.png'
import restCountriesApiImg from '../assets/rest-countries-api.png'


export default function Projects({projectsRef}) {
    return (
        <section className='projects-section' ref={projectsRef}>
            <h1 className='projects-heading section-heading'>Projects</h1>
            <Project
                    className="project project-align-right"
                    live="https://fonzies-countries-api.netlify.app/"
                    repo="https://github.com/915fonzie/rest-countries-api"
                    imgUrl={restCountriesApiImg}
                >
                    <Project.Title>REST Countries API w/ Theme Switcher</Project.Title>
                    <Project.Description>This challenge project is from Frontend Mentor. Uses one API to get data about all countries. Was built using React, SASS, React-Router, React-Query and Framer Motion.</Project.Description>
            </Project>
            <Project
                    className="project"
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
            <Project
                    className="project"
                    live="https://fonzies-clock-app.netlify.app/"
                    repo="https://github.com/915fonzie/clock-app"
                    imgUrl={clockAppImg}
                >
                    <Project.Title>Clock App</Project.Title>
                    <Project.Description>This challenge project is from Frontend Mentor. Uses two different APIs to get users location and timezone. Was built using React, SASS, and React-Query framework</Project.Description>
            </Project>
            <Project
                    className="project project-align-right"
                    live="https://fonzies-dessert-menu.netlify.app/"
                    repo="https://github.com/915fonzie/product-list-with-cart-main"
                    imgUrl={DessertAppImg}
                >
                    <Project.Title>Dessert Menu with Checkout</Project.Title>
                    <Project.Description>This challenge project is from Frontend Mentor. Was built using React and SASS</Project.Description>
            </Project>
            <Project
                    className="project"
                    live="https://fonzie-movie-watchlist.netlify.app/"
                    repo="https://github.com/915fonzie/Movie-Watchlist"
                    imgUrl={movieWatchlistImg}
                >
                    <Project.Title>Movie Watchlist App</Project.Title>
                    <Project.Description>This project is a movie watchlist app from a solo project on Scrimba. Uses public API to generate movies based on search query. Was built using Javascript and CSS</Project.Description>
            </Project>
            <Project
                    className="project project-align-right"
                    live="https://explorefashion.netlify.app/"
                    repo="https://github.com/915fonzie/Dynamic-Website-Demo"
                    imgUrl={exploreFashionImg}
                >
                    <Project.Title>Explore Fashion App Demo</Project.Title>
                    <Project.Description>Creating a dynamic and interactive website using Javascript, HTML5, CSS3, and SASS. Libraries such as Barba.js, ScrollMagic, and GSAP were used as well.</Project.Description>
            </Project>
        </section>
    )
}