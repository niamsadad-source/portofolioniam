import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaFileAlt, FaDownload } from 'react-icons/fa';
import logoRakamin from '../../assets/logo-rakamin.png';
import logoDisnaker from '../../assets/logo-disnaker.png';
import disnakerPhoto1 from '../../assets/disnaker-photo1.jpg';
import disnakerPhoto2 from '../../assets/disnaker-photo2.jpg';
import logoSmeru from '../../assets/logo-smeru.png';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [lightbox, setLightbox] = useState({ open: false, photos: [], index: 0 });
  const [docViewer, setDocViewer] = useState({ open: false, file: '', title: '' });

  const openLightbox = (photos, index = 0) => setLightbox({ open: true, photos, index });
  const closeLightbox = () => setLightbox({ open: false, photos: [], index: 0 });
  const nextPhoto = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.photos.length }));
  const prevPhoto = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.photos.length) % l.photos.length }));

  const experiences = [
    {
      title: "Research Assistant",
      company: "SMERU Research Institute (Remote)",
      type: "Internship",
      period: "Oct 2026 – Nov 2026",
      description:
        "Supported a study on green jobs in the textile and textile products (TPT) industry, from mapping occupations to organizing the evidence behind the report.",
      achievements: [
        "Applied the KBJI 2014 analytical framework to the newly published KBJI 2026, organizing occupational task descriptions in spreadsheets",
        "Compiled green-occupation tasks from LinkedIn job postings and standardized TPT companies' 2024 sustainability report data to fit the study's framework",
        "Managed the team's shared Zotero library: collecting, organizing, and tagging references for report writing",
      ],
      logo: logoSmeru,
      accentColor: '#0f766e',
      accentBg: '#ccfbf1',
      typeBg: '#ccfbf1',
      typeColor: '#0f766e',
    },
    {
      title: "UX Researcher Intern",
      company: "Digital Amoeba by Telkom Indonesia — Project Based Internship Rakamin Academy",
      type: "Internship",
      period: "Aug 2026 – Sep 2026",
      description:
        "Planned and designed UX research covering research goal-setting, question list preparation, method selection, and target participant criteria.",
      achievements: [
        "Conducted user research using qualitative and quantitative approaches to identify user needs, behavior patterns, and pain points",
        "Formulated data-driven design/feature recommendations as the basis for optimizing the Ideabox platform and improving overall user experience",
      ],
      logo: logoRakamin,
      document: "/certificates/PBI_Certificate_DigitalAmoeba_Rakamin.pdf",
      accentColor: '#1a1aff',
      accentBg: '#e8e8ff',
      typeBg: '#e8e8ff',
      typeColor: '#1a1aff',
    },
    {
      title: "Administrative & Customer Service Intern",
      company: "UPTD BLK Kota Semarang — Dinas Tenaga Kerja Kota Semarang",
      type: "Internship",
      period: "Jan 2024 – Feb 2024",
      description:
        "Provided accurate, responsive, and professional consultation on job training programs to more than 50 prospective participants per week.",
      achievements: [
        "Handled community needs and complaints with effective communication and strong public service standards",
        "Performed data entry, verification, and management of initial training registration records using Google Docs and Google Sheets",
      ],
      logo: logoDisnaker,
      photos: [disnakerPhoto2, disnakerPhoto1],
      accentColor: '#b45309',
      accentBg: '#fef3c7',
      typeBg: '#fef3c7',
      typeColor: '#b45309',
    },
  ];
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-14 right-16" width="22" height="22" viewBox="0 0 22 22" style={{ opacity: 0.3 }}>
          <rect x="9" y="0" width="4" height="22" fill="#dd2244"/>
          <rect x="0" y="9" width="22" height="4" fill="#dd2244"/>
        </svg>
        <svg className="absolute top-20 left-14" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.38 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#1a1aff"/>
        </svg>
        <svg className="absolute bottom-16 right-16" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute bottom-24 left-8" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.28 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff"/>
        </svg>
        <svg className="absolute top-1/2 right-6" width="80" height="12" viewBox="0 0 80 12" style={{ opacity: 0.18 }}>
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
            stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            letterSpacing: '-1.5px',
            color: '#111',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            Work{' '}
            <span style={{ color: '#1a1aff' }}>Experience</span>
          </h2>
          <svg width="160" height="12" viewBox="0 0 160 12" style={{ display: 'block', margin: '0 auto 0.75rem' }}>
            <path d="M0 7 Q13 1 26 7 Q39 13 52 7 Q65 1 80 7 Q95 13 108 7 Q121 1 134 7 Q147 13 160 7"
              stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#666',
            maxWidth: '420px',
            margin: '0 auto',
          }}>
            Internship experience and professional involvement so far
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'repeating-linear-gradient(to bottom, #1a1aff 0px, #1a1aff 6px, transparent 6px, transparent 12px)',
            opacity: 0.2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                  {/* Timeline dot / icon */}
                  <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '56px', height: '56px',
                      borderRadius: '50%',
                      background: '#fff',
                      border: '3px solid #f0ede8',
                      boxShadow: `0 0 0 2px ${exp.accentColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '9px',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div style={{ flex: 1, position: 'relative', paddingBottom: '0.5rem' }}>
                    {/* Offset shadow */}
                    <div style={{
                      position: 'absolute',
                      top: '6px', left: '6px',
                      width: '100%', height: '100%',
                      background: exp.accentColor,
                      borderRadius: '18px',
                      opacity: 0.1,
                    }} />

                    <div style={{
                      position: 'relative',
                      background: '#fff',
                      border: '2px solid #e0ddd8',
                      borderRadius: '18px',
                      padding: '1.5rem',
                      borderLeft: `4px solid ${exp.accentColor}`,
                    }}>
                      {/* Header row */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '0.75rem',
                      }}>
                        <div>
                          <h3 style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            color: '#111',
                            marginBottom: '3px',
                          }}>
                            {exp.title}
                          </h3>
                          <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            color: exp.accentColor,
                          }}>
                            {exp.company}
                          </p>
                        </div>

                        {/* Badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'flex-end' }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            background: exp.typeBg,
                            color: exp.typeColor,
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700, fontSize: '0.7rem',
                            padding: '3px 10px', borderRadius: '50px',
                            border: `1.5px solid ${exp.accentColor}33`,
                          }}>
                            {exp.type}
                          </span>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            background: '#f5f4f0',
                            color: '#666',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600, fontSize: '0.7rem',
                            padding: '3px 10px', borderRadius: '50px',
                            border: '1.5px solid #e0ddd8',
                          }}>
                            <FaCalendarAlt size={9} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{ height: '1.5px', background: '#f0ede8', margin: '0.75rem 0' }} />

                      {/* Description */}
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.875rem',
                        color: '#444',
                        lineHeight: 1.7,
                        marginBottom: '1rem',
                      }}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {exp.achievements.map((item, i) => (
                          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <div style={{
                              flexShrink: 0,
                              marginTop: '3px',
                              width: '18px', height: '18px',
                              borderRadius: '50%',
                              background: exp.accentBg,
                              border: `1.5px solid ${exp.accentColor}66`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.accentColor }} />
                            </div>
                            <p style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: '0.825rem',
                              color: '#555',
                              lineHeight: 1.65,
                            }}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons: view document / view photos */}
                      {(exp.document || (exp.photos && exp.photos.length > 0)) && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem' }}>
                          {exp.document && (
                            <button
                              onClick={() => setDocViewer({ open: true, file: exp.document, title: `${exp.title} — Certificate` })}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: exp.accentBg,
                                color: exp.accentColor,
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                padding: '0.55rem 1.1rem',
                                borderRadius: '50px',
                                border: `1.5px solid ${exp.accentColor}55`,
                                cursor: 'pointer',
                                transition: 'transform 0.15s',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                              <FaFileAlt size={13} />
                              Lihat Dokumen
                            </button>
                          )}

                          {exp.photos && exp.photos.length > 0 && (
                            <button
                              onClick={() => openLightbox(exp.photos, 0)}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: exp.accentBg,
                                color: exp.accentColor,
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                padding: '0.55rem 1.1rem',
                                borderRadius: '50px',
                                border: `1.5px solid ${exp.accentColor}55`,
                                cursor: 'pointer',
                                transition: 'transform 0.15s',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                              <FaImages size={13} />
                              Lihat Foto ({exp.photos.length})
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      {/* Document Viewer Modal */}
      <AnimatePresence>
        {docViewer.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDocViewer({ open: false, file: '', title: '' })}
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
                    onClick={() => setDocViewer({ open: false, file: '', title: '' })}
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

              <div style={{ flex: 1, overflow: 'auto', background: '#525659' }}>
                <iframe
                  src={docViewer.file}
                  title={docViewer.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px', right: '20px',
                width: '40px', height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Tutup"
            >
              <FaTimes size={18} />
            </button>

            {lightbox.photos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                style={{
                  position: 'absolute',
                  left: '16px',
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Sebelumnya"
              >
                <FaChevronLeft size={18} />
              </button>
            )}

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={lightbox.photos[lightbox.index]}
              alt={`Foto ${lightbox.index + 1}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90%',
                maxHeight: '85vh',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              }}
            />

            {lightbox.photos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                style={{
                  position: 'absolute',
                  right: '16px',
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Berikutnya"
              >
                <FaChevronRight size={18} />
              </button>
            )}

            {lightbox.photos.length > 1 && (
              <div style={{
                position: 'absolute',
                bottom: '24px',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                background: 'rgba(255,255,255,0.15)',
                padding: '4px 14px',
                borderRadius: '50px',
              }}>
                {lightbox.index + 1} / {lightbox.photos.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;