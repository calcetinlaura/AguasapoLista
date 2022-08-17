import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Concierto from "./pages/Concierto";
import Cine from "./pages/Cine";
import Aguasapers from "./pages/Aguasapers";
import Programacion from "./pages/Programacion";
import Lista from "./pages/Lista";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Helmet from "./components/Helmet/helmet";
import React, { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Helmet />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/cine" element={<Cine />}></Route>
          <Route path="/concierto" element={<Concierto />}></Route>
          <Route path="/aguasapers" element={<Aguasapers />}></Route>
          <Route path="/programacion" element={<Programacion />}></Route>
          <Route path="/lista" element={<Lista />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
