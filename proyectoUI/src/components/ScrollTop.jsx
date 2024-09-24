import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página al tope cada vez que cambie la ruta
  }, [pathname]);

  return null;
}

export default ScrollToTop;
