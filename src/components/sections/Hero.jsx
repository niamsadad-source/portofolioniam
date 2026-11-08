import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };


  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ background: '#f0ede8', paddingTop: '64px' }}
    >
      {/* Scattered decorative SVG elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left star */}
        <svg className="absolute top-20 left-12" width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ opacity: 0.45 }}>
          <path d="M13 1L15.2 10L24 9L17 14.5L19.5 23.5L13 18.5L6.5 23.5L9 14.5L2 9L10.8 10Z" fill="#1a1aff"/>
        </svg>
        {/* Top-right plus */}
        <svg className="absolute top-16 right-20" width="22" height="22" viewBox="0 0 22 22" style={{ opacity: 0.3 }}>
          <rect x="9" y="0" width="4" height="22" fill="#dd2244"/>
          <rect x="0" y="9" width="22" height="4" fill="#dd2244"/>
        </svg>
        {/* Mid-left dot cluster */}
        <svg className="absolute top-1/2 left-6" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.3 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff"/>
        </svg>
        {/* Right sparkle */}
        <svg className="absolute top-1/3 right-10" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.3 }}>
          <path d="M12 0L13.5 9.5L23 8L15 12.5L17 22L12 16L7 22L9 12.5L1 8L10.5 9.5Z" fill="#cc8800"/>
        </svg>
        {/* Bottom-left wavy line */}
        <svg className="absolute bottom-24 left-1/4" width="100" height="14" viewBox="0 0 100 14" style={{ opacity: 0.2 }}>
          <path d="M0 7 Q12 1 25 7 Q37 13 50 7 Q62 1 75 7 Q87 13 100 7"
            stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
        {/* Large faint circle top-right */}
        <svg className="absolute -top-20 -right-20" width="300" height="300" viewBox="0 0 300 300" style={{ opacity: 0.06 }}>
          <circle cx="150" cy="150" r="130" stroke="#1a1aff" strokeWidth="30" fill="none"/>
        </svg>
        {/* Small faint circle bottom-left */}
        <svg className="absolute -bottom-16 -left-16" width="200" height="200" viewBox="0 0 200 200" style={{ opacity: 0.07 }}>
          <circle cx="100" cy="100" r="85" stroke="#dd2244" strokeWidth="22" fill="none"/>
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Role badge */}
        <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#fff',
            border: '1.5px solid #ddd',
            borderRadius: '50px',
            padding: '6px 20px',
            fontFamily: "'Sparkle Passion', 'Playfair Display', serif",
            fontSize: '1.1rem',
            fontWeight: 400,
            color: '#444',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22cc66', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Freshgraduate
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
          <h1 style={{
            fontFamily: "'Sparkle Passion', 'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-1px',
            color: '#1a1aff',
            marginBottom: '0.25rem',
          }}>
            People &
          </h1>
          {/* Wavy underline */}
          <svg width="260" height="14" viewBox="0 0 260 14" style={{ display: 'block', margin: '-8px auto 4px' }}>
            <path d="M0 9 Q16 2 32 9 Q48 16 65 9 Q82 2 98 9 Q115 16 130 9 Q146 2 163 9 Q179 16 195 9 Q212 2 228 9 Q244 16 260 9"
              stroke="#dd2244" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
          <h1 style={{
            fontFamily: "'Sparkle Passion', 'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-1px',
            color: '#111',
          }}>
            Society
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.75,
            color: '#555',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}
        >
          Exploring{' '}
          <strong style={{ color: '#111', fontWeight: 700 }}>human behavior</strong>,{' '}
          <strong style={{ color: '#111', fontWeight: 700 }}>social dynamics</strong>, and{' '}
          <strong style={{ color: '#111', fontWeight: 700 }}>everyday experiences</strong> through
          research. Turning observations and perspectives into meaningful insights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              background: '#1a1aff',
              color: '#fff',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.7rem 1.75rem',
              borderRadius: '50px',
              textDecoration: 'none',
              border: '2px solid #1a1aff',
              boxShadow: '3px 3px 0 #aaa',
              transition: 'box-shadow 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '5px 5px 0 #888'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '3px 3px 0 #aaa'}
          >
            Let's Connect
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              background: '#aaee00',
              color: '#111',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.7rem 1.75rem',
              borderRadius: '50px',
              textDecoration: 'none',
              border: '2px solid #111',
              boxShadow: '3px 3px 0 #555',
              transition: 'box-shadow 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '5px 5px 0 #333'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '3px 3px 0 #555'}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: '4rem' }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#999',
            }}>Scroll</span>
            <HiArrowDown size={20} color="#999" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;