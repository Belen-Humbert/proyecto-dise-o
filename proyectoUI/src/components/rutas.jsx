import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Lila from "../screens/lila";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/lila" element={<Lila/>} />

           


      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
