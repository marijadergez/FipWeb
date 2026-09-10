import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Container } from "react-bootstrap";
import Izbornik from "./components/Izbornik";
import Usluge from "./components/Usluge/Usluge";
import { IME_APLIKACIJE, RouteNames } from "../constants";
import "./App.css";


function App() {
  return (
    <>
      <Izbornik />

      <Container className="mt-4">
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.USLUGE} element={<Usluge />} />
        </Routes>
      </Container>

      <hr />

      <div className="text-center">
        &copy; {new Date().getFullYear()} {IME_APLIKACIJE}
      </div>
    </>
  );
}

export default App;