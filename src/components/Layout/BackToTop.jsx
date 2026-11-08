import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 40,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#1a1aff',
            border: '2.5px solid #111',
            boxShadow: '3px 3px 0 #111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'box-shadow 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '5px 5px 0 #111'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '3px 3px 0 #111'}
        >
          <FaArrowUp size={18} color="#fff" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;