import React from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = ({ scaleX }) => {
  return (
    <>
      {/* Main progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '3px',
          background: '#1a1aff',
          transformOrigin: 'left',
          zIndex: 50,
        }}
      />
      {/* Trailing red accent dot */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '3px',
          transformOrigin: 'left',
          zIndex: 49,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#dd2244',
          marginRight: '-4px',
          marginTop: '0px',
          flexShrink: 0,
        }} />
      </motion.div>
    </>
  );
};

export default ScrollProgress;