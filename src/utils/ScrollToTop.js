import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();        // Yaha se hm page ki location le rahe 
  useEffect(() => {
    window.scrollTo(0, 0); // x=0,y=0 means pahe show from top left side  
  }, [pathname]);
  return null;
}

