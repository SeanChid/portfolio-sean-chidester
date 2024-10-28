const Home = () => {
    return (
        <div className='home-pos'>
            <div className='intro-txt'>
                <p>
                    Hello, I'm Sean. I'm a web developer/ software engineer in Lehi, Utah.
                    I'm proficient in React.js, Redux, PostgreSQL, and more.
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