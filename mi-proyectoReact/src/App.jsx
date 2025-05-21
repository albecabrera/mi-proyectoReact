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
