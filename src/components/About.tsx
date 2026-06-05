import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { icon: '🏛️', value: '25+ lat', label: 'EXCO w Polsce od 1999 roku' },
  { icon: '🌍', value: '108 krajów', label: 'Sieć Kreston International' },
  { icon: '👥', value: '150+', label: 'Specjalistów w grupie' },
  { icon: '⚖️', value: 'Full-service', label: 'Od umów po sąd' },
]

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
      {/* Subtle background ornament */}
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
                O Kancelarii
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
              Prawo. Precyzja.<br />
              <span style={{ color: '#C9A84C' }}>Partnerstwo.</span>
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
              EXCO Poland Legal Vacher-Kielak to kancelaria radców prawnych oferująca kompleksowe
              wsparcie prawne dopasowane do potrzeb Klientów. Obsługujemy zarówno przedsiębiorców
              krajowych, jak i zagranicznych na każdym etapie prowadzenia działalności.
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
              Działamy w ramach{' '}
              <a
                href="https://exco.pl"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1B2A4A',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  textDecorationColor: '#C9A84C',
                  textUnderlineOffset: '3px',
                  textDecorationThickness: '2px',
                }}
              >
                EXCO A2A Polska
              </a>{' '}
              — jednej z wiodących grup doradczych w Polsce, należącej do globalnej sieci
              Kreston International obecnej w 108 krajach świata. To gwarancja wiedzy,
              doświadczenia i standardów na najwyższym poziomie.
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
                od 1999 roku
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
                {/* Gold top bar animates on hover */}
                <motion.div
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '3px', background: '#C9A84C',
                    width: 0,
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }}>
                  {stat.icon}
                </span>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: '#1B2A4A',
                  lineHeight: 1.1,
                  marginBottom: '0.375rem',
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
