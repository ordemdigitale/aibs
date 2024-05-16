import { Route, Routes } from 'react-router-dom'
import { Home, MotDG, Presentation } from "./pages"

const App = () => {

  return (
    <Routes>
      <Route
        path='/'
        element={ <Home /> }
      />
      <Route
        path='/mot-du-pdg'
        element={ <MotDG /> }
      />
      <Route
        path='/presentation'
        element={ <Presentation /> }
      />
    </Routes>
  )
}

export default App