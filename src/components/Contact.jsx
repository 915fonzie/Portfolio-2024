import React from 'react'

export default function Contact({ contactRef }) {
    
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className='contact' ref={contactRef}>
            <h1 className='section-heading'>Contact</h1>
            <p className='contact-text'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
            <form name='contact' method="POST" data-netlify="true">
                <input type='text' name='name' placeholder='Name'/>
                <input type='email' name='email' placeholder='Email' />
                <textarea name='message' placeholder='Message' />
                <input type="hidden" name="form-name" value="contact" />

                <button type='submit' onClick={(event) => handleSubmit(event)}>SUBMIT</button>
            </form>
        </section>
    )
}