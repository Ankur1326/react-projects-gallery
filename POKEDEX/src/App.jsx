import { Link } from 'react-browser-router'
import './App.css'
import CustomRoutes from './components/routes/CustomRoutes'

function App() {
  return (
    <>
      <h1>
        Pokedex 
        {/* <Link to="/">Pokedex</Link> */}
      </h1>
      <CustomRoutes />
    </>
  )
}

export default App;