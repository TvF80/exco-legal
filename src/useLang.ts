import { useState, useCallback } from 'react'
import type { Lang } from './translations'

const STORAGE_KEY = 'exco-lang'

export function useLang() {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && ['pl', 'en', 'fr', 'es'].includes(stored)) return stored
    const browser = navigator.language.toLowerCase()
    if (browser.startsWith('fr')) return 'fr'
    if (browser.startsWith('es')) return 'es'
    if (browser.startsWith('pl')) return 'pl'
    return 'en'
  })

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l)
    setLangState(l)
  }, [])

  return { lang, setLang }
}
