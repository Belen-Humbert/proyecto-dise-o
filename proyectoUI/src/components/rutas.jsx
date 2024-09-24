import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Lila from "../screens/lila";
import FODAlila from "../screens/FODAlila";  
import PESTlila from "../screens/PESTlila";
import PORTERlila from "../screens/PORTERlila";
import ScrollToTop from "./ScrollTop";

function Rutas() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lila" element={<Lila />} />
        <Route path="/foda" element={<FODAlila />} />  
        <Route path="/pest" element={<PESTlila />} />  
        <Route path="/porter" element={<PORTERlila />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
