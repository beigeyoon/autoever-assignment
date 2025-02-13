'use client';

import { useEffect, useState } from 'react';
import Icon from '../Icon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 transform rounded-full bg-white p-3 shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-5 opacity-0'
      }`}>
      <Icon
        iconName="top"
        className="h-[32px] w-[32px]"
      />
    </button>
  );
};

export default ScrollToTop;
