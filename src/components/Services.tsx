import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Building2,
  Briefcase,
  Archive,
  FileText,
  Scale,
  Users,
} from 'lucide-react'
import { services, type Service } from '../data/services'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Building2,
  Briefcase,
  Archive,
  FileText,
  Scale,
  Users,
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = iconMap[service.icon] ?? Building2

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{
        background: '#ffffff',
        borderRadius: '2px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        boxShadow: '0 1px 4px rgba(27,42,74,0.06), 0 4px 16px rgba(27,42,74,0.04)',
        borderLeft: '3px solid transparent',
        transition: 'box-shadow 0.3s ease, border-left-color 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onHoverStart={(e) => {
        const el = e.target as HTMLElement
        const card = el.closest('article') as HTMLElement
        if (card) {
          card.style.borderLeftColor = '#C9A84C'
          card.style.boxShadow = '0 8px 32px rgba(27,42,74,0.12), 0 2px 8px rgba(27,42,74,0.08)'
        }
      }}
      onHoverEnd={(e) => {
        const el = e.target as HTMLElement
        const card = el.closest('article') as HTMLElement
        if (card) {
          card.style.borderLeftColor = 'transparent'
          card.style.boxShadow = '0 1px 4px rgba(27,42,74,0.06), 0 4px 16px rgba(27,42,74,0.04)'
        }
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          background: 'rgba(201,168,76,0.1)',
          border: '1.5px solid rgba(201,168,76,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <IconComponent size={20} strokeWidth={1.5} style={{ color: '#C9A84C' }} />
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#1B2A4A',
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.8125rem',
            color: '#64748b',
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Items list */}
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          marginTop: 'auto',
          paddingTop: '0.25rem',
        }}
      >
        {service.items.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '0.8rem',
              color: '#475569',
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: '#C9A84C',
                fontWeight: 700,
                fontSize: '0.75rem',
                flexShrink: 0,
                marginTop: '0.15rem',
              }}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: '#EDE8DC',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background texture lines */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(27,42,74,0.025) 80px)',
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
            marginBottom: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
            }}
          >
            <div
              style={{
                width: '2.5rem',
                height: '2px',
                background: '#C9A84C',
                flexShrink: 0,
              }}
            />
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
              Zakres działalności
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#1B2A4A',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            Nasze usługi
          </h2>
          <p
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '0.9375rem',
              color: '#64748b',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            Kompleksowa obsługa prawna dla przedsiębiorstw — od rejestracji spółki po bieżące doradztwo korporacyjne.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
