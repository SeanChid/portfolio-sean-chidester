import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
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
        <h2>Skills</h2>
        <Skills />
      </div>

      <div id='projects' className='section-pd first-bg'>
        <h2>Projects</h2>
        <p>My projects will go here</p>
      </div>

      <div id='contact' className='section-pd second-bg'>
        <h2>Contact Section</h2>
        <p>contact me here I guess</p>
      </div>
    </div>
  )
}

export default App
