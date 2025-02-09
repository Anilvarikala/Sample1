import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Smooth scrolling effect
    });
  }, [pathname]); // Runs every time the path changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
