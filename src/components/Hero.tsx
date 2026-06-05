import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut", delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut', delay },
  }),
};

const floatVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [-1, 1, -1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ─── Stats data ───────────────────────────────────────────────────────────────

const STATS = [
  { value: '25+', label: 'lat EXCO w Polsce', sublabel: 'Obecność od 1999' },
  { value: '150+', label: 'specjalistów', sublabel: 'Radcowie i doradcy' },
  { value: '108', label: 'krajów — sieć', sublabel: 'Globalny zasięg' },
];

// ─── SVG Background pattern ───────────────────────────────────────────────────

function LegalPattern() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-fine"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(201,168,76,0.07)"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern
          id="grid-coarse"
          width="240"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 240 0 L 0 0 0 240"
            fill="none"
            stroke="rgba(201,168,76,0.12)"
            strokeWidth="0.8"
          />
        </pattern>
        <radialGradient id="glow-center" cx="70%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.08)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </radialGradient>
        <radialGradient id="glow-bottom" cx="50%" cy="100%" r="50%">
          <stop offset="0%" stopColor="rgba(27,42,74,0.9)" />
          <stop offset="100%" stopColor="rgba(27,42,74,0)" />
        </radialGradient>
      </defs>

      {/* Grid layers */}
      <rect width="1440" height="900" fill="url(#grid-fine)" />
      <rect width="1440" height="900" fill="url(#grid-coarse)" />

      {/* Central glow */}
      <rect width="1440" height="900" fill="url(#glow-center)" />

      {/* Diagonal accent lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={800 + i * 180}
          y1="0"
          x2={600 + i * 180}
          y2="900"
          stroke="rgba(201,168,76,0.05)"
          strokeWidth="1"
        />
      ))}

      {/* Corner flourish — top right */}
      <g transform="translate(1340, 20)" stroke="rgba(201,168,76,0.2)" fill="none">
        <line x1="0" y1="0" x2="80" y2="0" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="0" y2="80" strokeWidth="0.8" />
        <line x1="8" y1="8" x2="40" y2="8" strokeWidth="0.5" />
        <line x1="8" y1="8" x2="8" y2="40" strokeWidth="0.5" />
      </g>

      {/* Corner flourish — bottom left */}
      <g transform="translate(20, 820)" stroke="rgba(201,168,76,0.15)" fill="none">
        <line x1="0" y1="0" x2="60" y2="0" strokeWidth="0.8" />
        <line x1="0" y1="-60" x2="0" y2="0" strokeWidth="0.8" />
        <line x1="6" y1="-6" x2="30" y2="-6" strokeWidth="0.5" />
        <line x1="6" y1="-30" x2="6" y2="-6" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

// ─── Decorative emblem (right side) ──────────────────────────────────────────

function LegalEmblem() {
  return (
    <svg
      viewBox="0 0 360 360"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ maxWidth: 420, maxHeight: 420 }}
    >
      <defs>
        <radialGradient id="emblem-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.15)" />
          <stop offset="70%" stopColor="rgba(201,168,76,0.03)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </radialGradient>
        <filter id="blur-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="soft-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0.8 0 0 0  0.8 0.6 0 0 0  0 0 0 0 0  0 0 0 1.5 -0.2"
            result="gold-blur"
          />
          <feComposite in="SourceGraphic" in2="gold-blur" operator="over" />
        </filter>
      </defs>

      {/* Glow background */}
      <circle cx="180" cy="180" r="180" fill="url(#emblem-glow)" />

      {/* Outer ring — dashed */}
      <circle
        cx="180"
        cy="180"
        r="158"
        fill="none"
        stroke="rgba(201,168,76,0.2)"
        strokeWidth="0.8"
        strokeDasharray="4 6"
      />

      {/* Outer ring — solid */}
      <circle
        cx="180"
        cy="180"
        r="148"
        fill="none"
        stroke="rgba(201,168,76,0.5)"
        strokeWidth="1.5"
      />

      {/* Inner ring */}
      <circle
        cx="180"
        cy="180"
        r="124"
        fill="none"
        stroke="rgba(201,168,76,0.25)"
        strokeWidth="0.8"
      />

      {/* Octagon */}
      <polygon
        points="180,56 244,76 284,140 284,220 244,284 180,304 116,284 76,220 76,140 116,76"
        fill="rgba(201,168,76,0.04)"
        stroke="rgba(201,168,76,0.3)"
        strokeWidth="1"
      />

      {/* Cross hair lines (subtle) */}
      <line x1="180" y1="56" x2="180" y2="304" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
      <line x1="56" y1="180" x2="304" y2="180" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />

      {/* Scales of Justice — custom SVG */}
      <g transform="translate(180,180)" filter="url(#soft-glow)">
        {/* Pillar */}
        <rect x="-1.5" y="-72" width="3" height="144" fill="#C9A84C" opacity="0.9" rx="1.5" />

        {/* Top crossbar */}
        <rect x="-52" y="-72" width="104" height="3" fill="#C9A84C" opacity="0.9" rx="1.5" />

        {/* Left pan chain */}
        <line x1="-52" y1="-69" x2="-52" y2="-20" stroke="#C9A84C" strokeWidth="1.5" opacity="0.85" strokeDasharray="3 2" />
        {/* Right pan chain */}
        <line x1="52" y1="-69" x2="52" y2="-20" stroke="#C9A84C" strokeWidth="1.5" opacity="0.85" strokeDasharray="3 2" />

        {/* Left pan */}
        <ellipse cx="-52" cy="-14" rx="28" ry="8" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.9" />
        <path d="-80,-14 Q-52,-30 -24,-14" fill="rgba(201,168,76,0.15)" stroke="none" />

        {/* Right pan */}
        <ellipse cx="52" cy="-14" rx="28" ry="8" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.9" />
        <path d="24,-14 Q52,-30 80,-14" fill="rgba(201,168,76,0.15)" stroke="none" />

        {/* Base */}
        <rect x="-22" y="68" width="44" height="4" fill="#C9A84C" opacity="0.85" rx="2" />
        <rect x="-8" y="56" width="16" height="14" fill="#C9A84C" opacity="0.7" rx="1" />

        {/* Centre dot */}
        <circle cx="0" cy="-72" r="4" fill="#C9A84C" opacity="1" />
        <circle cx="0" cy="-72" r="7" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
      </g>

      {/* EPL Monogram arcs — top */}
      <path
        d="M 100 180 A 80 80 0 0 1 260 180"
        fill="none"
        stroke="rgba(201,168,76,0)"
        strokeWidth="0"
      />
      <text
        dy="-12"
        fill="rgba(201,168,76,0.6)"
        fontSize="9"
        letterSpacing="6"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
        textAnchor="middle"
      >
        <textPath href="#arc-top" startOffset="50%">
          EXCO POLAND LEGAL
        </textPath>
      </text>
      <path
        id="arc-top"
        d="M 88 180 A 92 92 0 0 1 272 180"
        fill="none"
      />

      {/* Bottom arc text */}
      <path
        id="arc-bottom"
        d="M 88 180 A 92 92 0 0 0 272 180"
        fill="none"
      />
      <text
        fill="rgba(201,168,76,0.4)"
        fontSize="8"
        letterSpacing="5"
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight="400"
        textAnchor="middle"
      >
        <textPath href="#arc-bottom" startOffset="50%">
          KANCELARIA RADCÓW PRAWNYCH
        </textPath>
      </text>

      {/* Corner diamond ticks */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 180 + 148 * Math.cos(rad);
        const y = 180 + 148 * Math.sin(rad);
        return (
          <rect
            key={angle}
            x={x - 4}
            y={y - 4}
            width="8"
            height="8"
            fill="#C9A84C"
            opacity="0.7"
            transform={`rotate(45, ${x}, ${y})`}
          />
        );
      })}
    </svg>
  );
}

// ─── Main Hero component ──────────────────────────────────────────────────────

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background:
          'linear-gradient(165deg, #0b1425 0%, #111c33 30%, #1B2A4A 60%, #1e3057 100%)',
      }}
    >
      {/* SVG pattern layer */}
      <LegalPattern />

      {/* Bottom fade to cream (for page transition) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background:
            'linear-gradient(to bottom, transparent, rgba(11,20,37,0.6))',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient gold orb — right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '-8%',
          top: '15%',
          width: '60vh',
          height: '60vh',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.04) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 1.5rem 80px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="lg:grid-cols-[1fr_1fr] lg:gap-16"
      >
        {/* ── LEFT: text content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '2.5rem',
                height: '1px',
                background: '#C9A84C',
                opacity: 0.8,
              }}
            />
            <span
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#C9A84C',
                letterSpacing: '0.06em',
                fontWeight: 600,
              }}
            >
              EXCO Poland Legal
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            custom={0.12}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.12,
              color: '#F8F5EE',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Kompleksowe wsparcie prawne{' '}
            <span
              style={{
                color: '#C9A84C',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              dla Twojego biznesu
              {/* Underline flourish */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background:
                    'linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3))',
                  transformOrigin: 'left',
                }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={0.24}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(248,245,238,0.68)',
              fontWeight: 400,
              maxWidth: '520px',
              margin: 0,
            }}
          >
            Kancelaria Radców Prawnych. Obsługujemy przedsiębiorców krajowych
            i zagranicznych w zakresie prawa gospodarczego, korporacyjnego i pracy.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={0.36}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
          >
            {/* Primary — gold solid */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #C9A84C 0%, #a8882e 100%)',
                color: '#1B2A4A',
                textDecoration: 'none',
                fontSize: '0.82rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                borderRadius: '2px',
                boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              }}
            >
              Nasze usługi
              <ArrowRight size={15} />
            </motion.a>

            {/* Secondary — ghost */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2, borderColor: '#F8F5EE', color: '#F8F5EE' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 28px',
                border: '1.5px solid rgba(248,245,238,0.4)',
                color: 'rgba(248,245,238,0.75)',
                textDecoration: 'none',
                fontSize: '0.82rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                borderRadius: '2px',
                transition: 'border-color 0.25s, color 0.25s',
              }}
            >
              <Phone size={14} />
              Skontaktuj się
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={0.48}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            style={{
              display: 'flex',
              gap: '0',
              marginTop: '0.5rem',
              borderTop: '1px solid rgba(201,168,76,0.15)',
              paddingTop: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: '1 1 auto',
                  minWidth: '100px',
                  paddingRight: '1.5rem',
                  borderRight:
                    i < STATS.length - 1
                      ? '1px solid rgba(201,168,76,0.15)'
                      : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: '#C9A84C',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: '0.7rem',
                    color: 'rgba(248,245,238,0.7)',
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                    marginTop: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: '0.62rem',
                    color: 'rgba(248,245,238,0.35)',
                    marginTop: '2px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: decorative emblem ── */}
        <motion.div
          variants={fadeIn}
          custom={0.3}
          initial="hidden"
          animate={controls}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          className="hidden lg:flex"
        >
          {/* Particle dots */}
          {[
            { top: '8%', left: '15%', size: 4, delay: 0 },
            { top: '20%', right: '10%', size: 3, delay: 1.2 },
            { bottom: '18%', left: '8%', size: 5, delay: 0.7 },
            { bottom: '8%', right: '18%', size: 3, delay: 2 },
            { top: '50%', left: '2%', size: 2, delay: 1.5 },
          ].map((dot, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 3 + i * 0.6,
                repeat: Infinity,
                delay: dot.delay,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                ...(dot.top ? { top: dot.top } : {}),
                ...(dot.bottom ? { bottom: dot.bottom } : {}),
                ...(dot.left ? { left: dot.left } : {}),
                ...(dot.right ? { right: dot.right } : {}),
                width: dot.size,
                height: dot.size,
                borderRadius: '50%',
                background: '#C9A84C',
              }}
            />
          ))}

          {/* Floating emblem */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{
              width: '100%',
              maxWidth: '440px',
              aspectRatio: '1',
              position: 'relative',
            }}
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.97, 1.03, 0.97] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
              }}
            />

            <LegalEmblem />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(248,245,238,0.35)',
            fontWeight: 500,
          }}
        >
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '36px',
            background:
              'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
