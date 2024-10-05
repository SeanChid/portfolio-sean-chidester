import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Header />

      <div id='home' className='section-pd first-bg'>
        <h1>Sean Chidester - Full Stack Web Developer</h1>
        <Home />
      </div>

      <div id='skills' className='section-pd second-bg'>
        <h1>Skills</h1>
        <Skills />
      </div>

      <div id='projects' className='section-pd first-bg'>
        <h1>Projects</h1>
        <Projects />
      </div>

      <div id='contact' className='section-pd second-bg'>
        <h1>Contact Me</h1>
        <p>contact me here I guess</p>
      </div>
    </div>
  )
}

export default App
