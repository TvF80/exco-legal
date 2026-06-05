import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Usługi', href: '#services' },
  { label: 'Zespół', href: '#team' },
  { label: 'O Kancelarii', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

const drawerVariants = {
  closed: {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  open: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const linkContainerVariants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const linkItemVariants = {
  closed: { y: 24, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? 'rgba(17, 28, 51, 0.97)'
            : 'rgba(27, 42, 74, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(201, 168, 76, 0.25)'
            : '1px solid rgba(201, 168, 76, 0.08)',
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.35)'
            : '0 2px 12px rgba(0,0,0,0.15)',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 lg:px-12"
          style={{ maxWidth: '1280px', height: scrolled ? '64px' : '76px', transition: 'height 0.4s ease' }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 no-underline group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => setActiveLink('')}
          >
            {/* Logo image */}
            <img
              src="/logo-legal.png"
              alt="EXCO Poland Legal"
              style={{ height: 36, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />

            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#C9A84C',
                  letterSpacing: '0.02em',
                  lineHeight: 1.15,
                  fontStyle: 'italic',
                }}
              >
                EXCO Poland
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  color: 'rgba(248, 245, 238, 0.65)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                Legal
              </span>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <motion.ul
              className="flex items-center gap-7 list-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="relative group no-underline"
                    style={{
                      fontSize: '0.8rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color:
                        activeLink === link.href
                          ? '#C9A84C'
                          : 'rgba(248, 245, 238, 0.8)',
                      transition: 'color 0.25s ease',
                      paddingBottom: '4px',
                    }}
                    onMouseEnter={(e) => {
                      if (activeLink !== link.href)
                        (e.currentTarget as HTMLElement).style.color = '#F8F5EE';
                    }}
                    onMouseLeave={(e) => {
                      if (activeLink !== link.href)
                        (e.currentTarget as HTMLElement).style.color =
                          'rgba(248, 245, 238, 0.8)';
                    }}
                  >
                    {link.label}
                    {/* Underline line */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '1px',
                        width: activeLink === link.href ? '100%' : '0%',
                        background: '#C9A84C',
                        transition: 'width 0.3s ease',
                      }}
                      className="group-hover:!w-full"
                    />
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="no-underline relative overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover="hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 22px',
                border: '1.5px solid #C9A84C',
                borderRadius: '2px',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#C9A84C',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Fill layer */}
              <motion.span
                variants={{
                  hover: { scaleX: 1, originX: 0 },
                }}
                initial={{ scaleX: 0, originX: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#C9A84C',
                  transformOrigin: 'left',
                }}
              />
              <motion.span
                variants={{ hover: { color: '#1B2A4A' } }}
                style={{ position: 'relative', zIndex: 1, color: '#C9A84C', transition: 'color 0.35s ease' }}
              >
                Umów konsultację
              </motion.span>
            </motion.a>
          </nav>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden flex items-center justify-center"
            style={{
              width: 40,
              height: 40,
              border: '1.5px solid rgba(201,168,76,0.4)',
              borderRadius: '2px',
              background: 'transparent',
              cursor: 'pointer',
              color: '#C9A84C',
            }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'linear-gradient(160deg, #0e1a30 0%, #1B2A4A 50%, #111c33 100%)',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '100px',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingBottom: '3rem',
              overflow: 'hidden',
            }}
          >
            {/* Background texture lines */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.06,
                pointerEvents: 'none',
              }}
              viewBox="0 0 400 800"
              preserveAspectRatio="xMidYMid slice"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={i}
                  x1={-100 + i * 50}
                  y1="0"
                  x2={i * 50 + 100}
                  y2="800"
                  stroke="#C9A84C"
                  strokeWidth="0.5"
                />
              ))}
            </svg>

            {/* Gold accent line top */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)',
                opacity: 0.7,
              }}
            />

            <motion.ul
              className="list-none flex flex-col gap-1"
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.href} variants={linkItemVariants}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="no-underline flex items-center gap-4 py-4 group"
                    style={{
                      borderBottom: '1px solid rgba(201,168,76,0.12)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'rgba(201,168,76,0.5)',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        minWidth: '2rem',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="font-serif"
                      style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#F8F5EE',
                        letterSpacing: '-0.01em',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#C9A84C';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#F8F5EE';
                      }}
                    >
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA in drawer */}
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a
                href="#contact"
                onClick={() => handleLinkClick('#contact')}
                className="no-underline flex items-center justify-center"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#C9A84C',
                  color: '#1B2A4A',
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  borderRadius: '2px',
                }}
              >
                Umów konsultację
              </a>
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: '0.72rem',
                  color: 'rgba(248,245,238,0.3)',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                }}
              >
                EXCO Poland Legal © 2025
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
