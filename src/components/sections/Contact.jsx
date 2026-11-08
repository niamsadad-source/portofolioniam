import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:niamsadada12@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    { icon: FaLinkedin,  href: "https://www.linkedin.com/in/ahmad-niam-sadad-a4aa4b187", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/ammtwelve_",                   label: "Instagram" },
    { icon: FaEnvelope,  href: "mailto:niamsadada12@gmail.com",                          label: "Email" },
  ];

  const contactInfo = [
    { icon: FaEnvelope,      text: "niamsadada12@gmail.com" },
    { icon: FaPhone,         text: "088227547015" },
    { icon: FaMapMarkerAlt,  text: "Kota Semarang" },
  ];

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    background: '#f8f6f2',
    border: '2px solid #e0ddd8',
    borderRadius: '12px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    color: '#111',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: '0.8rem',
    color: '#444',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-12 left-16" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.38 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#1a1aff"/>
        </svg>
        <svg className="absolute top-14 right-20" width="20" height="20" viewBox="0 0 20 20" style={{ opacity: 0.28 }}>
          <rect x="8" y="0" width="4" height="20" fill="#dd2244"/>
          <rect x="0" y="8" width="20" height="4" fill="#dd2244"/>
        </svg>
        <svg className="absolute bottom-20 left-10" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.28 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff"/>
        </svg>
        <svg className="absolute bottom-16 right-12" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute top-1/2 left-4" width="80" height="12" viewBox="0 0 80 12" style={{ opacity: 0.18 }}>
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
            stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 style={{
            fontFamily: "'Sparkle Passion', 'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(3rem, 7vw, 4.75rem)',
            letterSpacing: '-0.5px',
            color: '#111',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            Get In <span style={{ color: '#1a1aff' }}>Touch</span>
          </h2>
          <svg width="140" height="12" viewBox="0 0 140 12" style={{ display: 'block', margin: '0 auto 0.75rem' }}>
            <path d="M0 7 Q11 1 22 7 Q33 13 44 7 Q55 1 70 7 Q85 13 96 7 Q107 1 118 7 Q129 13 140 7"
              stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#666',
            maxWidth: '460px',
            margin: '0 auto',
          }}>
            Have a project in mind? Let's work together and create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: '7px', left: '7px',
              width: '100%', height: '100%',
              background: '#dd2244', borderRadius: '20px', opacity: 0.15,
            }} />
            <div style={{
              position: 'relative',
              background: '#fff',
              border: '2px solid #e0ddd8',
              borderRadius: '20px',
              padding: '2rem',
              height: '100%',
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: '1.75rem',
                  color: '#111',
                  letterSpacing: '-0.5px',
                  marginBottom: '0.5rem',
                }}>
                  Let's talk! 👋
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: '#666',
                  lineHeight: 1.7,
                }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.75rem' }}>
                {contactInfo.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    background: '#f8f6f2',
                    border: '1.5px solid #e8e4de',
                    borderRadius: '12px',
                    padding: '10px 14px',
                  }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: '#e8e8ff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <item.icon size={14} color="#1a1aff" />
                    </div>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.85rem',
                      color: '#333',
                      fontWeight: 500,
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '10px',
                }}>
                  Find me on
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '42px', height: '42px',
                        background: '#fff',
                        border: '2px solid #ddd',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#333',
                        textDecoration: 'none',
                        boxShadow: '2px 2px 0 #ccc',
                        transition: 'box-shadow 0.15s',
                      }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: '7px', left: '7px',
              width: '100%', height: '100%',
              background: '#1a1aff', borderRadius: '20px', opacity: 0.15,
            }} />
            <div style={{
              position: 'relative',
              background: '#fff',
              border: '2px solid #e0ddd8',
              borderRadius: '20px',
              padding: '2rem',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: '1.5rem',
                color: '#111',
                marginBottom: '0.5rem',
                letterSpacing: '-0.5px',
              }}>
                Send a Message
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8rem',
                color: '#666',
                marginBottom: '1.5rem',
              }}>
                Fill in the form below and I'll get back to you as soon as possible ✦
              </p>

              <form onSubmit={handleEmailSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#1a1aff'}
                      onBlur={e => e.target.style.borderColor = '#e0ddd8'}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#1a1aff'}
                      onBlur={e => e.target.style.borderColor = '#e0ddd8'}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      rows="5"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = '#1a1aff'}
                      onBlur={e => e.target.style.borderColor = '#e0ddd8'}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: submitted ? '#22cc66' : '#1a1aff',
                      color: '#fff',
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      padding: '0.8rem',
                      borderRadius: '50px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: submitted ? '3px 3px 0 #1a9945' : '3px 3px 0 #0d0dcc',
                      transition: 'background 0.3s, box-shadow 0.3s',
                    }}
                  >
                    <FaPaperPlane size={16} />
                    {submitted ? 'Opening Email Client...' : 'Send Message'}
                  </motion.button>

                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.7rem',
                    color: '#999',
                    textAlign: 'center',
                    marginTop: '8px',
                  }}>
                    ✦ Your default email client will open with a pre-filled message ✦
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Contact;