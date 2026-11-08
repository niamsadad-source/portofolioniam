import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaHandsHelping } from 'react-icons/fa';
import logoUin from '../../assets/logo-uin-walisongo.png';
import logoDivija from '../../assets/logo-divija.png';

const SocialActivity = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activities = [
    {
      title: 'Head of Social & Health Division',
      org: 'Kuliah Kerja Nyata (KKN) — UIN Walisongo Semarang',
      period: '2024',
      description:
        "Led the social and health division during the university's community service program (KKN), coordinating social and health-related activities for the local community.",
      achievements: [
        'Organized and led social and health programs involving direct engagement with the local community',
        'Coordinated with fellow division members and community leaders to ensure programs ran smoothly and met community needs',
      ],
      badge: 'KKN',
      logo: logoUin,
      accentColor: '#1a7a3c',
      accentBg: '#e2f4e8',
      typeBg: '#e2f4e8',
      typeColor: '#1a7a3c',
    },
    {
      title: 'Research and Admin Counseling',
      org: 'Divija — Mental Health (Remote)',
      period: 'Oct 2026 – Present',
      description:
        'Researched what clients and counselors actually need from mental health awareness and counseling services, while keeping day-to-day counseling operations running.',
      achievements: [
        'Managed counseling administration: client data, scheduling, documentation, and coordination with counselors',
        'Turned research and admin findings into input for improving the counseling service',
      ],
      badge: 'Volunteer',
      logo: logoDivija,
      accentColor: '#0f766e',
      accentBg: '#ccfbf1',
      typeBg: '#ccfbf1',
      typeColor: '#0f766e',
    },
  ];

  return (
    <section
      id="social"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-14 left-16" width="22" height="22" viewBox="0 0 22 22" style={{ opacity: 0.3 }}>
          <rect x="9" y="0" width="4" height="22" fill="#1a1aff"/>
          <rect x="0" y="9" width="22" height="4" fill="#1a1aff"/>
        </svg>
        <svg className="absolute top-20 right-14" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.38 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#dd2244"/>
        </svg>
        <svg className="absolute bottom-16 left-16" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute top-1/2 right-6" width="80" height="12" viewBox="0 0 80 12" style={{ opacity: 0.18 }}>
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
            stroke="#1a1aff" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
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
            Social{' '}
            <span style={{ color: '#1a1aff' }}>Activity</span>
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
            Community involvement and organizational experience
          </p>
        </motion.div>

        {/* Activity card(s) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {activities.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              {/* Logo bubble */}
              <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: '3px solid #f0ede8',
                  boxShadow: `0 0 0 2px ${act.accentColor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '8px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={act.logo}
                    alt={act.org}
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
                  background: act.accentColor,
                  borderRadius: '18px',
                  opacity: 0.1,
                }} />

                <div style={{
                  position: 'relative',
                  background: '#fff',
                  border: '2px solid #e0ddd8',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  borderLeft: `4px solid ${act.accentColor}`,
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
                        {act.title}
                      </h3>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        color: act.accentColor,
                      }}>
                        {act.org}
                      </p>
                    </div>

                    {/* Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'flex-end' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        background: act.typeBg,
                        color: act.typeColor,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700, fontSize: '0.7rem',
                        padding: '3px 10px', borderRadius: '50px',
                        border: `1.5px solid ${act.accentColor}33`,
                      }}>
                        <FaHandsHelping size={9} style={{ marginRight: '2px' }} />
                        {act.badge}
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
                        {act.period}
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
                    {act.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {act.achievements.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0,
                          marginTop: '3px',
                          width: '18px', height: '18px',
                          borderRadius: '50%',
                          background: act.accentBg,
                          border: `1.5px solid ${act.accentColor}66`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: act.accentColor }} />
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default SocialActivity;
