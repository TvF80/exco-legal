import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import { team, type TeamMember } from '../data/team'

/* ─── Animation variants ──────────────────────────────────────────────────── */

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

/* ─── Avatar ──────────────────────────────────────────────────────────────── */

function Avatar({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  if (member.photo) {
    return (
      <div
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(201,168,76,0.5)',
          flexShrink: 0,
        }}
      >
        <img
          src={member.photo}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    )
  }

  return (
    <div
      style={{
        width: '5rem',
        height: '5rem',
        borderRadius: '50%',
        background: 'rgba(27,42,74,0.6)',
        border: '2px solid rgba(201,168,76,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#C9A84C',
          letterSpacing: '0.02em',
        }}
      >
        {initials}
      </span>
    </div>
  )
}

/* ─── Board card (wide, horizontal) ──────────────────────────────────────── */

function BoardCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '3px',
        padding: '1.75rem 2rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
        backdropFilter: 'blur(4px)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 0 0 0 rgba(201,168,76,0)',
      }}
      onHoverStart={(e) => {
        const card = (e.target as HTMLElement).closest('article') as HTMLElement
        if (card) {
          card.style.borderColor = 'rgba(201,168,76,0.6)'
          card.style.boxShadow = '0 0 24px rgba(201,168,76,0.08)'
        }
      }}
      onHoverEnd={(e) => {
        const card = (e.target as HTMLElement).closest('article') as HTMLElement
        if (card) {
          card.style.borderColor = 'rgba(201,168,76,0.2)'
          card.style.boxShadow = '0 0 0 0 rgba(201,168,76,0)'
        }
      }}
    >
      <Avatar member={member} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <div>
          <h3
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.25,
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#C9A84C',
              letterSpacing: '0.04em',
              marginTop: '0.2rem',
            }}
          >
            {member.title}
          </p>
        </div>

        <p
          style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(248,245,238,0.6)',
            lineHeight: 1.65,
          }}
        >
          {member.bio}
        </p>

        {/* Specializations */}
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.375rem', marginTop: '0.125rem' }}>
          {member.specializations.map((spec) => (
            <span
              key={spec}
              style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '0.6875rem',
                padding: '0.2rem 0.625rem',
                border: '1px solid rgba(201,168,76,0.35)',
                borderRadius: '1px',
                color: 'rgba(201,168,76,0.85)',
                letterSpacing: '0.02em',
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Email */}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'rgba(201,168,76,0.7)',
              textDecoration: 'none',
              marginTop: '0.25rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.7)')}
          >
            <Mail size={13} strokeWidth={1.75} />
            E-mail
          </a>
        )}
      </div>
    </motion.article>
  )
}

/* ─── Legal team card (vertical) ─────────────────────────────────────────── */

function LegalCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(248,245,238,0.08)',
        borderRadius: '3px',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
        backdropFilter: 'blur(4px)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 0 0 0 rgba(201,168,76,0)',
      }}
      onHoverStart={(e) => {
        const card = (e.target as HTMLElement).closest('article') as HTMLElement
        if (card) {
          card.style.borderColor = 'rgba(201,168,76,0.5)'
          card.style.boxShadow = '0 0 28px rgba(201,168,76,0.07)'
        }
      }}
      onHoverEnd={(e) => {
        const card = (e.target as HTMLElement).closest('article') as HTMLElement
        if (card) {
          card.style.borderColor = 'rgba(248,245,238,0.08)'
          card.style.boxShadow = '0 0 0 0 rgba(201,168,76,0)'
        }
      }}
    >
      <Avatar member={member} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', width: '100%' }}>
        <h3
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1.0625rem',
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.25,
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            color: '#C9A84C',
            letterSpacing: '0.05em',
            textTransform: 'uppercase' as const,
          }}
        >
          {member.title}
        </p>
      </div>

      <p
        style={{
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '0.7875rem',
          color: 'rgba(248,245,238,0.55)',
          lineHeight: 1.65,
        }}
      >
        {member.bio}
      </p>

      {/* Specializations */}
      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.3rem', justifyContent: 'center' }}>
        {member.specializations.map((spec) => (
          <span
            key={spec}
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '0.6625rem',
              padding: '0.175rem 0.55rem',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '1px',
              color: 'rgba(201,168,76,0.8)',
              letterSpacing: '0.02em',
            }}
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Email button */}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: '#1B2A4A',
            background: '#C9A84C',
            padding: '0.45rem 1rem',
            borderRadius: '1px',
            textDecoration: 'none',
            marginTop: '0.25rem',
            transition: 'background 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#e4c878'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = '#C9A84C'
          }}
        >
          <Mail size={12} strokeWidth={2} />
          E-mail
        </a>
      )}
    </motion.article>
  )
}

/* ─── Section label ───────────────────────────────────────────────────────── */

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      <div style={{ width: '1.75rem', height: '1px', background: 'rgba(201,168,76,0.5)' }} />
      <span
        style={{
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase' as const,
          color: 'rgba(201,168,76,0.65)',
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
    </div>
  )
}

/* ─── Main component ──────────────────────────────────────────────────────── */

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const boardMembers = team.filter((m) => m.role === 'board')
  const legalMembers = team.filter((m) => m.role !== 'board')

  return (
    <section
      id="team"
      ref={sectionRef}
      style={{
        background: '#1B2A4A',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ornaments */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-10rem',
          right: '-10rem',
          width: '40rem',
          height: '40rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-8rem',
          left: '-8rem',
          width: '32rem',
          height: '32rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
        }}
      >
        {/* Section header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            marginBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: '#C9A84C', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: '#C9A84C',
              }}
            >
              Ludzie
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            Nasz Zespół
          </h2>
          <p
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '0.9375rem',
              color: 'rgba(248,245,238,0.55)',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            Doświadczeni prawnicy i menedżerowie, których łączy wspólna misja — skuteczna obsługa przedsiębiorstw.
          </p>
        </motion.div>

        {/* Board group */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ marginBottom: '3.5rem' }}
        >
          <GroupLabel>Zarząd EXCO A2A Polska</GroupLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem',
            }}
            className="board-grid"
          >
            {boardMembers.map((member, i) => (
              <BoardCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Legal team group */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <GroupLabel>Kancelaria Radców Prawnych</GroupLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}
            className="legal-grid"
          >
            {legalMembers.map((member, i) => (
              <LegalCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .board-grid {
            grid-template-columns: 1fr !important;
          }
          .legal-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .legal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
