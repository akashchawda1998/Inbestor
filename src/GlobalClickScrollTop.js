// src/components/GlobalClickScrollTop.jsx
import { useEffect } from 'react';

const GlobalClickScrollTop = () => {
  useEffect(() => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // no UI
};

export default GlobalClickScrollTop;
