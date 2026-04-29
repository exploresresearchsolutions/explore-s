import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LoadTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}

export default LoadTop;