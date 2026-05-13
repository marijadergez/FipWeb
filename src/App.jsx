import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'
import { IME_APLIKACIJE } from "../constants"; 
import { RouteNames } from "../constants"; 




function App() {
  return (
    <>
      <Izbornik />
      <Container className="mt-4">
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
        </Routes>
      </Container>
      <hr />
      <div className="text-center">
        &copy; {new Date().getFullYear()} {IME_APLIKACIJE}
      </div>
    </>
  )
}

export default App