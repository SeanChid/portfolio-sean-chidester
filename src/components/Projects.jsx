const Projects = () => {
    return (
        <div className='projects-pos'>
            <div className='project'>
                <div className='skybooking-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        Sky Booking is a flight booking application powered by an Express backend and a PostgreSQL database, 
                        designed to provide real-time scheduled flight information through an integrated flight data API. 
                        With a focus on simplicity and reliability, Sky Booking offers users a streamlined and efficient booking experience.
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
                        Adopt a Hobby is a React-powered platform created to help users discover and dive into new hobbies. 
                        The app features a PostgreSQL database managed by an admin, who can create, edit, or delete hobbies 
                        to keep the collection fresh and engaging. Users can explore a curated list of hobbies, each accompanied 
                        by helpful resources and an integrated Google Maps feature to locate nearby stores and venues for hobby-related 
                        supplies. With a user-friendly interface and responsive design, Adopt a Hobby makes exploring new interests accessible and enjoyable.
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