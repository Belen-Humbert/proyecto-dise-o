import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Lila from "../screens/lila";
import Interluz from "../screens/interluz";
import FODAlila from "../screens/FODAlila";  
import PESTlila from "../screens/PESTlila";
import PORTERlila from "../screens/PORTERlila";
import Ies from "../screens/ies";
import FODAies from "../screens/FODAies";
import FODAinterluz from "../screens/FODAinterluz";
import PESTinterluz from "../screens/PESTinterluz";
import PORTERinterluz from "../screens/PORTERinterluz";
import PORTERies from "../screens/PORTERies";
import PESTies from "../screens/PESTies";
import ScrollToTop from "./ScrollTop";

function Rutas() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lila" element={<Lila />} />
        <Route path="/interluz" element={<Interluz />} />
        
        {/* Análisis para Lila */}
        <Route path="/lila/foda" element={<FODAlila />} />  
        <Route path="/lila/pest" element={<PESTlila />} />  
        <Route path="/lila/porter" element={<PORTERlila />} />
        
        {/* Secciones para IES */}
        <Route path="/ies" element={<Ies />} />
        <Route path="/ies/foda" element={<FODAies />} />
        <Route path="/ies/pest" element={<PESTies />} />
        <Route path="/ies/porter" element={<PORTERies />} />

        {/* Análisis para Interluz */}
        <Route path="/interluz/foda" element={<FODAinterluz />} />
        <Route path="/interluz/pest" element={<PESTinterluz />} />
        <Route path="/interluz/porter" element={<PORTERinterluz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
