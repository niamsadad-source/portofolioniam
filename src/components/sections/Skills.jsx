import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileExcel, FaFileWord, FaFilePowerpoint, FaGoogle, FaSearch, FaComments, FaClipboardCheck, FaChartBar, FaFileAlt, FaTimes, FaDownload } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import logoZotero from '../../assets/logo-zotero.png';
import logoKarirnex from '../../assets/logo-karirnex.png';
import logoMyskill from '../../assets/logo-myskill.png';
import logoUmn from '../../assets/logo-umn.png';
import logoUin from '../../assets/logo-uin-walisongo.png';
import logoFigma from '../../assets/logo-figma.png';
import logoNotion from '../../assets/logo-notion.png';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [docViewer, setDocViewer] = useState({ open: false, file: '', title: '', isImage: false });

  const skills = [
    // Research
    { name: "Research Methodologies", icon: FaSearch, color: "#1a1aff", bg: "#e8e8ff", level: 80 },
    { name: "Figma",            logo: logoFigma,       bg: "#f2f2f2", level: 80 },
    { name: "Notion",           logo: logoNotion,      bg: "#f2f2f2", level: 80 },
    { name: "Zotero",           logo: logoZotero,      bg: "#f2f2f2", level: 80 },
    { name: "Data Analysis",    icon: FaChartBar,      color: "#b45309", bg: "#fef3c7", level: 80 },

    // Tools
    { name: "Canva",            icon: SiCanva,         color: "#00a4bd", bg: "#dff5f8", level: 80 },
    { name: "Microsoft Word",   icon: FaFileWord,      color: "#1a55aa", bg: "#ddeaf8", level: 80 },
    { name: "Microsoft Excel",  icon: FaFileExcel,     color: "#1a7a3c", bg: "#e2f4e8", level: 80 },
    { name: "Microsoft PowerPoint", icon: FaFilePowerpoint, color: "#cc4400", bg: "#fde9e0", level: 80 },
    { name: "Google Workspace", icon: FaGoogle,        color: "#cc3300", bg: "#fde6e0", level: 80 },
  ];

  const certificates = [
    { title: "Research References using Zotero", issuer: "Udemy", file: "/certificates/Research_References_Zotero_Udemy.pdf", logo: logoZotero },
    { title: "User Research and Design", issuer: "University of Minnesota (Coursera)", file: "/certificates/User_Research_And_Design_UMN.pdf", logo: logoUmn },
    { title: "UI/UX Research Design", issuer: "Karirnex", file: "/certificates/UIUX_Research_Design_Karirnex.pdf", logo: logoKarirnex },
    { title: "Bootcamp Microsoft Excel", issuer: "Karirnex", file: "/certificates/Bootcamp_Microsoft_Excel_Karirnex.pdf", logo: logoKarirnex },
    { title: "End to End UX Research Process", issuer: "MySkill", file: "/certificates/End_To_End_UX_Research_MySkill.pdf", logo: logoMyskill },
    { title: "TOEFL Preparation Test", issuer: "UIN Walisongo Language Development Center", file: "/certificates/TOEFL_AhmadNiamSadad.pdf", logo: logoUin },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-14 right-14" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.35 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#1a1aff"/>
        </svg>
        <svg className="absolute top-10 left-20" width="18" height="18" viewBox="0 0 18 18" style={{ opacity: 0.28 }}>
          <rect x="7" y="0" width="4" height="18" fill="#dd2244"/>
          <rect x="0" y="7" width="18" height="4" fill="#dd2244"/>
        </svg>
        <svg className="absolute bottom-16 right-12" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.28 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff"/>
        </svg>
        <svg className="absolute bottom-20 left-10" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute top-1/2 left-4" width="80" height="12" viewBox="0 0 80 12" style={{ opacity: 0.18 }}>
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
            stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            Skills &{' '}
            <span style={{ color: '#1a1aff' }}>Tools</span>
          </h2>
          {/* Wavy underline */}
          <svg width="160" height="12" viewBox="0 0 160 12" style={{ display: 'block', margin: '0 auto 0.75rem' }}>
            <path d="M0 7 Q13 1 26 7 Q39 13 52 7 Q65 1 80 7 Q95 13 108 7 Q121 1 134 7 Q147 13 160 7"
              stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#666',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Tools I use to research, organize, and communicate insights
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                style={{ position: 'relative' }}
              >
                {/* Offset shadow */}
                <div style={{
                  position: 'absolute',
                  top: '5px', left: '5px',
                  width: '100%', height: '100%',
                  background: '#1a1aff',
                  borderRadius: '16px',
                  opacity: 0.15,
                }} />
                {/* Card */}
                <div style={{
                  position: 'relative',
                  background: '#fff',
                  border: '2px solid #e0ddd8',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* Icon bubble */}
                    <div style={{
                      width: '52px', height: '52px',
                      borderRadius: '14px',
                      background: skill.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      border: `1.5px solid ${skill.color ? skill.color + '33' : '#00000022'}`,
                      overflow: 'hidden',
                      padding: skill.logo ? '10px' : 0,
                    }}>
                      {skill.logo
                        ? <img src={skill.logo} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        : <Icon size={28} color={skill.color} />
                      }
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: '1rem',
                        color: '#111',
                      }}>
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: '0.75rem',
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.75rem',
          }}>
            Soft Skills
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '640px', margin: '0 auto' }}>
            {["Teamwork", "Time Management", "Adaptability", "Empathy", "Curiosity", "Problem Solving", "Analytical Thinking"].map((skill, i) => (
              <span key={i} style={{
                background: '#fff',
                border: '1.5px solid #e0ddd8',
                borderRadius: '50px',
                padding: '6px 16px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#444',
              }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certificates & Training */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '3.5rem' }}
        >
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#111',
            textAlign: 'center',
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
          }}>
            Certificates & Training
          </h3>
          <div className="grid sm:grid-cols-2 gap-4" style={{ maxWidth: '760px', margin: '0 auto' }}>
            {certificates.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '2px solid #e0ddd8',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'border-color 0.15s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a1aff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0ddd8'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Issuer logo */}
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '10px',
                  background: '#f7f6f3',
                  border: '1.5px solid #e0ddd8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                  padding: '5px',
                }}>
                  {cert.logo
                    ? <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    : <FaFileAlt size={18} color="#999" />
                  }
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#111',
                    lineHeight: 1.35,
                  }}>
                    {cert.title}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.78rem',
                    color: '#888',
                    marginBottom: cert.file ? '6px' : 0,
                  }}>
                    {cert.issuer}{!cert.file && ' — PDF belum tersedia'}
                  </p>

                  {cert.file && (
                    <button
                      onClick={() => setDocViewer({ open: true, file: cert.file, title: cert.title, isImage: !!cert.isImage })}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#e8e8ff',
                        color: '#1a1aff',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        border: '1.5px solid #1a1aff33',
                        cursor: 'pointer',
                      }}
                    >
                      <FaFileAlt size={10} />
                      Lihat Dokumen
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Document Viewer Modal */}
      <AnimatePresence>
        {docViewer.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDocViewer({ open: false, file: '', title: '', isImage: false })}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.75)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#fff',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '860px',
                height: '85vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.9rem 1.25rem',
                borderBottom: '1.5px solid #eee',
                flexShrink: 0,
              }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#111',
                  margin: 0,
                  paddingRight: '1rem',
                }}>
                  {docViewer.title}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <a
                    href={docViewer.file}
                    download
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '34px', height: '34px',
                      borderRadius: '50%',
                      background: '#f0ede8',
                      color: '#444',
                    }}
                    aria-label="Download"
                  >
                    <FaDownload size={13} />
                  </a>
                  <button
                    onClick={() => setDocViewer({ open: false, file: '', title: '', isImage: false })}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '34px', height: '34px',
                      borderRadius: '50%',
                      background: '#f0ede8',
                      color: '#444',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label="Tutup"
                  >
                    <FaTimes size={15} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div style={{ flex: 1, overflow: 'auto', background: '#525659', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {docViewer.isImage ? (
                  <img
                    src={docViewer.file}
                    alt={docViewer.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <iframe
                    src={docViewer.file}
                    title={docViewer.title}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;