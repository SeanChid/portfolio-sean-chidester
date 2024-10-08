const Projects = () => {
    return (
        <div className='projects-pos'>
            <div className='project'>
                <div className='skybooking-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        A flight booking application built with Express and a PostgreSQL database
                        for the backend with an implemented flight data API
                    </p>
                </div>
                <div className='project-btns'>
                    <button className='btn btn-primary'>GitHub</button>
                    <button className='btn btn-primary'>Demo</button>
                </div>
            </div>
            <div className='project'>
                <div className='adoptahobby-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        A hobbiest website of sorts.
                    </p>
                </div>
                <div className='project-btns'>
                    <button className='btn btn-primary'>GitHub</button>
                    <button className='btn btn-primary'>Demo</button>
                </div>
            </div>
        </div>
    )
}

export default Projects