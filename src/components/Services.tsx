import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Building2, Briefcase, Archive, FileText, Scale, Users, X, ChevronRight,
} from 'lucide-react'
import { services, type Service } from '../data/services'
import { useLangContext } from '../LangContext'
import { translations } from '../translations'

type LucideProps = { size?: number; strokeWidth?: number; color?: string }
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Building2, Briefcase, Archive, FileText, Scale, Users,
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ServiceCard({
  service, index, isActive, onClick,
}: {
  service: Service; index: number; isActive: boolean; onClick: () => void
}) {
  const IconComponent = iconMap[service.icon] ?? Building2

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      onClick={onClick}
      whileHover={{ y: isActive ? 0 : -4 }}
      style={{
        background: isActive ? '#1B2A4A' : '#ffffff',
        borderRadius: '3px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: isActive
          ? '0 8px 32px rgba(27,42,74,0.25)'
          : '0 1px 4px rgba(27,42,74,0.06), 0 4px 16px rgba(27,42,74,0.04)',
        borderLeft: `3px solid ${isActive ? '#C9A84C' : 'transparent'}`,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Icon */}
      <div style={{
        width: '2.75rem', height: '2.75rem', borderRadius: '50%',
        background: isActive ? 'rgba(201,168,76,0.18)' : 'rgba(201,168,76,0.1)',
        border: `1.5px solid ${isActive ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.25)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <IconComponent size={18} strokeWidth={1.5} color="#C9A84C" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.05rem', fontWeight: 600,
          color: isActive ? '#F8F5EE' : '#1B2A4A',
          lineHeight: 1.3,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem',
        }}>
          {service.title}
          <ChevronRight
            size={14}
            color={isActive ? '#C9A84C' : '#94a3b8'}
            style={{ flexShrink: 0, transform: isActive ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }}
          />
        </h3>
        <p style={{
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '0.78rem', color: isActive ? 'rgba(248,245,238,0.6)' : '#64748b',
          lineHeight: 1.6,
        }}>
          {service.description}
        </p>
      </div>
    </motion.article>
  )
}

function ServiceExpanded({ service, onClose, lang }: { service: Service; onClose: () => void; lang: string }) {
  const IconComponent = iconMap[service.icon] ?? Building2
  const expandedLabels: Record<string, { scope: string; description: string; includes: string; cta: string }> = {
    pl: { scope: 'Zakres usług', description: 'Oferujemy kompleksową obsługę prawną w powyższym zakresie, dostosowaną do indywidualnych potrzeb każdego Klienta. Działamy szybko, skutecznie i z pełnym zaangażowaniem na każdym etapie współpracy.', includes: 'Co obejmuje usługa', cta: 'Skontaktuj się' },
    en: { scope: 'Scope of services', description: 'We provide comprehensive legal support in the above areas, tailored to the individual needs of each Client. We act swiftly, effectively, and with full commitment at every stage of the engagement.', includes: 'What the service includes', cta: 'Get in touch' },
    fr: { scope: 'Périmètre des services', description: 'Nous fournissons une assistance juridique complète dans les domaines susmentionnés, adaptée aux besoins individuels de chaque client. Nous agissons rapidement, efficacement et avec un engagement total à chaque étape.', includes: 'Ce que comprend le service', cta: 'Nous contacter' },
    es: { scope: 'Alcance de servicios', description: 'Ofrecemos apoyo jurídico integral en los ámbitos anteriores, adaptado a las necesidades individuales de cada cliente. Actuamos con rapidez, eficacia y pleno compromiso en cada etapa de la colaboración.', includes: 'Qué incluye el servicio', cta: 'Contáctenos' },
  }
  const el = expandedLabels[lang] ?? expandedLabels['en']

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        background: '#1B2A4A',
        borderRadius: '4px',
        padding: '3rem',
        position: 'relative',
        border: '1px solid rgba(201,168,76,0.2)',
        boxShadow: '0 20px 60px rgba(11,20,37,0.35)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(201,168,76,0.06) 0%, transparent 50%)',
      }} />

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '2px', width: '2rem', height: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#C9A84C',
        }}
      >
        <X size={14} strokeWidth={2} color="#C9A84C" />
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', position: 'relative' }}
        className="expanded-grid"
      >
        {/* Left — description */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '4rem', height: '4rem', borderRadius: '50%',
              background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <IconComponent size={26} strokeWidth={1.25} color="#C9A84C" />
            </div>
            <div>
              <p style={{ fontFamily: '"Inter"', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.25rem' }}>
                {el.scope}
              </p>
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700,
                color: '#F8F5EE', lineHeight: 1.2,
              }}>
                {service.title}
              </h3>
            </div>
          </div>

          <p style={{
            fontFamily: '"Inter"', fontSize: '1rem', color: 'rgba(248,245,238,0.75)',
            lineHeight: 1.8, marginBottom: '1.5rem',
          }}>
            {service.description}
          </p>

          <p style={{
            fontFamily: '"Inter"', fontSize: '0.9rem', color: 'rgba(248,245,238,0.55)',
            lineHeight: 1.75,
          }}>
            {el.description}
          </p>

          <motion.a
            href="#contact"
            onClick={onClose}
            whileHover={{ y: -2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginTop: '2rem', padding: '0.75rem 1.75rem',
              background: 'linear-gradient(135deg, #C9A84C 0%, #a8882e 100%)',
              color: '#1B2A4A', textDecoration: 'none',
              fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              fontWeight: 700, borderRadius: '2px',
              boxShadow: '0 4px 20px rgba(201,168,76,0.25)',
            }}
          >
            {el.cta}
            <ChevronRight size={14} color="#1B2A4A" />
          </motion.a>
        </div>

        {/* Right — items */}
        <div>
          <p style={{
            fontFamily: '"Inter"', fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C',
            marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{ width: '1.5rem', height: '1px', background: '#C9A84C', display: 'inline-block' }} />
            {el.includes}
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {service.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.35, ease: 'easeOut' }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                  fontFamily: '"Inter"', fontSize: '0.9rem',
                  color: 'rgba(248,245,238,0.82)', lineHeight: 1.6,
                }}
              >
                <span style={{
                  width: '1.5rem', height: '1.5rem', borderRadius: '50%',
                  background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  marginTop: '0.1rem',
                }}>
                  <span style={{ color: '#C9A84C', fontSize: '0.65rem', fontWeight: 700 }}>✓</span>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .expanded-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeId, setActiveId] = useState<string | null>(null)
  const { lang } = useLangContext()
  const t = translations[lang]

  const activeService = services.find(s => s.id === activeId) ?? null

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: '#EDE8DC', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(27,42,74,0.025) 80px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        {/* Header */}
        <motion.div
          variants={headerVariants} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: '#C9A84C', flexShrink: 0 }} />
            <span style={{
              fontFamily: '"Inter"', fontSize: '0.6875rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#C9A84C',
            }}>
              {t.services.eyebrow}
            </span>
          </div>
          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 700,
            color: '#1B2A4A', lineHeight: 1.2, letterSpacing: '-0.01em',
          }}>
            {t.services.h2}
          </h2>
          <p style={{
            fontFamily: '"Inter"', fontSize: '0.9375rem', color: '#64748b',
            maxWidth: '520px', lineHeight: 1.7,
          }}>
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: activeService ? '1.5rem' : '0' }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isActive={activeId === service.id}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
            />
          ))}
        </motion.div>

        {/* Expanded panel */}
        <AnimatePresence mode="wait">
          {activeService && (
            <ServiceExpanded
              key={activeService.id}
              service={activeService}
              onClose={() => setActiveId(null)}
              lang={lang}
            />
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
