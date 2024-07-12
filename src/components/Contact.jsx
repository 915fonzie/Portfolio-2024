import React from 'react'

export default function Contact({contactRef}) {
    return (
        <section className='contact' ref={contactRef}>
            <h1 className='section-heading'>Contact</h1>
            <p className='contact-text'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
            <form name='contact' netlify>
                <input type='text' name='name' placeholder='Name'/>
                <input type='email' name='email' placeholder='Email' />
                <textarea name='message' placeholder='Message' />
                <button type='submit'>SUBMIT</button>
            </form>
        </section>
    )
}