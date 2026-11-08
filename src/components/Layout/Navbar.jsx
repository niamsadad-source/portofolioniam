import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiMail, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Social',     href: '#social' },
  { label: 'Contact',    href: '#contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/ahmad-niam-sadad-a4aa4b187', icon: FiLinkedin,  label: 'LinkedIn' },
  { href: 'https://www.instagram.com/ammtwelve_',                   icon: FiInstagram, label: 'Instagram' },
  { href: 'mailto:niamsadada12@gmail.com',                          icon: FiMail,      label: 'Email' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  /* ─── scroll shadow & active section ─── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // highlight active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── smooth scroll ─── */
  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ─── lock body scroll when menu open ─── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(240,237,232,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1.5px solid rgba(0,0,0,0.06)' : '1.5px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* ── Logo ── */}
          <motion.a
            href="/"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: '1.3rem',
              color: '#1a1aff',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
              flexShrink: 0,
            }}
          >
            Ni'am.
          </motion.a>

          {/* ── Desktop Nav Links ── */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }} className="desktop-nav">
            {navLinks.map(link => {
              const isActive = active === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={e => scrollTo(e, link.href)}
                  whileHover={{ y: -1 }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.875rem',
                    color: isActive ? '#1a1aff' : '#444',
                    textDecoration: 'none',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    background: isActive ? '#e8e8ff' : 'transparent',
                    transition: 'all 0.2s',
                    position: 'relative',
                  }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </nav>

          {/* ── Desktop Social Icons ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="desktop-social">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '34px', height: '34px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#fff',
                  border: '1.5px solid #ddd',
                  borderRadius: '50%',
                  color: '#444',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          {/* ── Hamburger (mobile) ── */}
          <motion.button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: '#fff',
              border: '1.5px solid #ddd',
              borderRadius: '10px',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              color: '#333',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>

        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '64px', left: 0, right: 0, bottom: 0,
              background: 'rgba(240,237,232,0.98)',
              backdropFilter: 'blur(16px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                  color: active === link.href.replace('#', '') ? '#1a1aff' : '#111',
                  textDecoration: 'none',
                  padding: '0.4rem 1.5rem',
                  borderRadius: '12px',
                  letterSpacing: '-0.5px',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Social row in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ display: 'flex', gap: '12px', marginTop: '2rem' }}
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#fff',
                    border: '2px solid #ddd',
                    borderRadius: '50%',
                    color: '#444',
                    textDecoration: 'none',
                    boxShadow: '2px 2px 0 #ccc',
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .desktop-nav,
        .desktop-social { display: flex; }
        
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-social { display: none !important; }
          .hamburger      { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
