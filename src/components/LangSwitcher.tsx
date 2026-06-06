import { motion } from 'framer-motion'
import type { Lang } from '../translations'

interface LangSwitcherProps {
  lang: Lang
  setLang: (l: Lang) => void
  /** When true, renders as a vertical stack (for mobile drawer). Default: false (horizontal row). */
  vertical?: boolean
}

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'pl', flag: '🇵🇱', label: 'PL' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
]

// Design tokens — navy + gold palette matching Navbar
const NAVY  = '#0a1628'
const GOLD  = '#c9a84c'
const CREAM = '#f5f0e8'

export default function LangSwitcher({ lang, setLang, vertical = false }: LangSwitcherProps) {
  return (
    <div
      style={{
        display:        'flex',
        flexDirection:  vertical ? 'column' : 'row',
        gap:            vertical ? '6px' : '4px',
        alignItems:     vertical ? 'stretch' : 'center',
      }}
    >
      {LANGS.map((item) => {
        const isActive = item.code === lang
        return (
          <motion.button
            key={item.code}
            onClick={() => setLang(item.code)}
            whileHover={{ scale: isActive ? 1 : 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            aria-label={`Switch language to ${item.label}`}
            aria-pressed={isActive}
            style={{
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              gap:             '5px',
              padding:         vertical ? '10px 16px' : '5px 10px',
              borderRadius:    '6px',
              border:          isActive ? `1.5px solid ${GOLD}` : '1.5px solid rgba(201,168,76,0.25)',
              background:      isActive ? GOLD : 'transparent',
              color:           isActive ? NAVY : CREAM,
              cursor:          isActive ? 'default' : 'pointer',
              fontFamily:      "'Inter', 'Segoe UI', sans-serif",
              fontSize:        vertical ? '13px' : '11px',
              fontWeight:      isActive ? 700 : 500,
              letterSpacing:   '0.06em',
              lineHeight:      1,
              userSelect:      'none',
              outline:         'none',
              transition:      'background 0.2s, color 0.2s, border-color 0.2s',
              width:           vertical ? '100%' : 'auto',
              whiteSpace:      'nowrap',
            }}
          >
            <span
              style={{
                fontSize:   vertical ? '16px' : '13px',
                lineHeight: 1,
              }}
            >
              {item.flag}
            </span>
            <span>{item.label}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
