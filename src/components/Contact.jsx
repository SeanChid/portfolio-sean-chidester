const Contact = () => {
    return (
        <div className='contact-form'>
            <form className='form'>
                <input className='form-control' type='text' placeholder='Your Name' required/>
                <input className='form-control' type='email' placeholder='Your Email' required/>
                <textarea className='form-control' placeholder='Your Message' rows='5' required></textarea>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact