const Home = () => {
    return (
        <div className='home-pos'>
            <div className='intro-txt'>
                <p>
                    Hi, I'm Sean, a passionate web developer and software engineer based in Lehi, Utah. 
                    I craft responsive, high-performance web applications with a strong foundation in React.js, JavaScript, and PostgreSQL. 
                    With a commitment to clean code and scalable solutions, I bring a user-focused approach to every project, 
                    creating seamless and engaging digital experiences.
                </p>
            </div>
            <div className='link-btns'>
                <button 
                    className='btn btn-primary' 
                    onClick={() => window.location.href = 'https://github.com/SeanChid'}
                >
                    GitHub
                </button>
                <button 
                    className='btn btn-primary' 
                    onClick={() => window.location.href = 'https://www.linkedin.com/in/sean-chidester-4015842a9'}
                >
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Home