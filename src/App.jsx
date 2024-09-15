import Header from './components/Header.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Header />

      <div id='home' className='section-pd home-bg'>
        <h2>Home Section</h2>
        <p>Howdy Yall Welcome to this here page</p>
      </div>

      <div id='about' className='section-pd about-bg'>
        <h2>About Section</h2>
        <p>This is my soon to be portfolio</p>
      </div>

      <div id='projects' className='section-pd projects-bg'>
        <h2>Projects</h2>
        <p>My projects will go here</p>
      </div>

      <div id='contact' className='section-pd contact-bg'>
        <h2>Contact Section</h2>
        <p>contact me here I guess</p>
      </div>
    </div>
  )
}

export default App
