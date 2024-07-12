import React from 'react'

export default function Project({children, className, live, repo, imgUrl}) {
    return (
        <div className={className}>
            <a href={live} target="_blank">
                <div className="project-img-container">
                    <img className='project-img' src={imgUrl} />
                </div>
            </a>
            <div className="project-text">
                {children}
                <div className='project-links'>
                    <a href={live} target="_blank"><div>LIVE APP</div></a>
                    <a href={repo} target="_blank"><div>REPOSITORY</div></a>
                </div>
            </div>
        </div>
    )
}