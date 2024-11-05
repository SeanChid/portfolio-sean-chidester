const Projects = () => {
    return (
        <div className='projects-pos'>
            <div className='project'>
                <div className='skybooking-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        A flight booking application built with Express and a PostgreSQL database
                        for the backend with an implemented flight data API for scheduled flights.
                    </p>
                </div>
                <div className='project-btns'>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://github.com/SeanChid/wb-project-2'}
                    >
                        GitHub
                    </button>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://www.youtube.com/watch?v=fIIu3Auwdvs'}
                    >
                        Demo
                    </button>
                </div>
            </div>
            <div className='project'>
                <div className='adoptahobby-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        A hobbiest website created with React with a Postgres database.
                    </p>
                </div>
                <div className='project-btns'>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://github.com/AlyssaBeth14/adopt-a-hobby'}
                    >
                        GitHub
                    </button>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://www.youtube.com/watch?v=76hOG2_k0UI'}
                    >
                        Demo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects