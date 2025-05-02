const Projects = () => {
    return (
        <div className='projects-pos'>
            <div className='project'>
                <h3>ChatApp</h3>
                <div className='chatapp-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        ChatApp is a real-time messaging platform built using Socket.IO to provide fast and reliable bidirectional communication between users.
                        It leverages Windsurf to streamline development, improve component structure, and enhance overall code maintainability. 
                        A scalable PostgreSQL database schema was designed and optimized to efficiently store and retrieve chat history,
                        ensuring consistent performance as the application grows.
                    </p>
                </div>
                <div className='project-btns'>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://github.com/SeanChid/Socket-io-Demo'}
                    >
                        GitHub
                    </button>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://youtu.be/1JTsSOpIoMc'}
                    >
                        Demo
                    </button>
                </div>
            </div>
            <div className='project'>
                <h3>Chatroom Experience</h3>
                <div className='chatroomexp-img'></div>
                <div className='project-info'>
                    <p className='project-text'>
                        Chatroom Experience is a minimalistic chatroom application leveraging websockets for real-time communication between clients.
                        Designed and implemented a robust PostgreSQL database to ensure reliable chat history storage, 
                        providing efficient data persistence and fast retrieval for users. Integrated Redux to handle user authentication and state management,
                        ensuring a smooth and consistent login flow and UI updates across components.
                    </p>
                </div>
                <div className='project-btns'>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://github.com/SeanChid/web-sockets-example'}
                    >
                        GitHub
                    </button>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => window.location.href = 'https://youtu.be/slMmx_JJQuU'}
                    >
                        Demo
                    </button>
                </div>
            </div>
            <div className='project'>
                <h3>Adopt A Hobby</h3>
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
            <div className='project'>
                <h3>Sky Booking</h3>
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
        </div>
    )
}

export default Projects