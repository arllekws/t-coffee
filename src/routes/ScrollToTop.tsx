import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// Componente para scrollar pra cima.. react router nao faz isso nativamente.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
