import Header from './components/Header.jsx'
// import './App.css'

function App() {
  return (
    <div>
      <Header />

      <div id='home' style={{ padding: '100px', backgroundColor: '#f0f0f0'}}>
        <h2>Home Section</h2>
        <p>Howdy Yall Welcome to this here page</p>
      </div>

      <div id='about' style={{ padding: '100px', backgroundColor: '#e0e0e0'}}>
        <h2>About Section</h2>
        <p>This is my soon to be portfolio</p>
      </div>

      <div id='contact' style={{ padding: '100px', backgroundColor: '#d0d0d0'}}>
        <h2>Contact Section</h2>
        <p>contact me here I guess</p>
      </div>
    </div>
  )
}

export default App
