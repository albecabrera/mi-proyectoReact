import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// Import your components
// import Inicio from './Inicio'
// import SobreMi from './SobreMi'
// import Proyectos from './Proyectos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Sobre Mi">Sobre Mi</Link>
            </li>
            <li>
              <Link to="/Proyectos">Proyectos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route exact path="/" component={Inicio} />
      <Route path="/Sobre Mi" component={SobreMi} />
      <Route path="/Proyectos" component={Proyectos} />
    </Router>
  )
}

export default App
