import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLangContext } from '../LangContext'
import { translations } from '../translations'

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLangContext()
  const t = translations[lang]

  const stats = [
    { value: t.about.stat1.val, label: t.about.stat1.lbl },
    { value: t.about.stat2.val, label: t.about.stat2.lbl },
    { value: t.about.stat3.val, label: t.about.stat3.lbl },
    { value: t.about.stat4.val, label: t.about.stat4.lbl },
  ]

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', right: 0, top: 0,
          width: '40%', height: '100%',
          opacity: 0.025, pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 400 600" fill="none" style={{ width: '100%', height: '100%' }}>
          <circle cx="300" cy="200" r="300" fill="#1B2A4A" />
          <circle cx="200" cy="450" r="200" fill="#C9A84C" />
        </svg>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}
          className="about-grid"
        >
          {/* LEFT — text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={item}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span style={{ width: '2.5rem', height: '1px', background: '#C9A84C', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}>
                {t.about.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              custom={0.1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={item}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#1B2A4A',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              {t.about.h2line1}<br />
              <span style={{ color: '#C9A84C' }}>{t.about.h2gold}</span>
            </motion.h2>

            <motion.div
              custom={0.2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={item}
              style={{ width: '3rem', height: '2px', background: '#C9A84C', opacity: 0.4 }}
            />

            <motion.p
              custom={0.3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={item}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                color: '#1B2A4A',
                opacity: 0.8,
              }}
            >
              {t.about.p1}
            </motion.p>

            <motion.p
              custom={0.4}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={item}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                color: '#1B2A4A',
                opacity: 0.8,
              }}
            >
              {t.about.p2}
            </motion.p>

            <motion.div
              custom={0.5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={item}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span style={{ width: '2.5rem', height: '1px', background: '#C9A84C', opacity: 0.5, flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                color: '#1B2A4A',
                opacity: 0.5,
              }}>
                {t.about.since} 1999
              </span>
            </motion.div>
          </div>

          {/* RIGHT — stat cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            alignContent: 'center',
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardAnim}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(27,42,74,0.12)' }}
                style={{
                  background: '#ffffff',
                  borderRadius: '3px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 24px rgba(27,42,74,0.07)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '3px', background: '#C9A84C',
                    width: 0,
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#C9A84C',
                  lineHeight: 1,
                  marginBottom: '0.375rem',
                  letterSpacing: '-0.02em',
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: '#1B2A4A',
                  opacity: 0.6,
                  lineHeight: 1.4,
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
