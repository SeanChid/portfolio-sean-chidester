import axios from 'axios'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [honeypot, setHoneypot] = useState('')

    const submit = (e) => {
        e.preventDefault()

        if (honeypot) {
            console.warn('Spam submission blocked')
            return
        }

        const info = {
            name: name,
            email: email,
            message: message,
        }

        axios.post('/api/send-email', info)
            .then((res) => {
                alert('Message successfully sent.')
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => {
                alert('There was a problem sending your message.')
                console.error(error)
            })
    }

    return (
        <div>
            <br/>
            <h2>Email: chidestersean320@gmail.com</h2>
            <br/>
            <div className='contact-form'>
                <form className='form' onSubmit={submit}>
                    <input 
                        className='form-control'
                        type='text'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className='form-control'
                        placeholder='Your Message'
                        rows='5'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <input
                        type='text'
                        style={{ display: 'none' }}
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex='-1'
                        autoComplete='off'
                    />
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact