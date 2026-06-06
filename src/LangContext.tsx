import { createContext, useContext, type ReactNode } from 'react'
import { useLang } from './useLang'
import type { Lang } from './translations'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue>({ lang: 'pl', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLang()
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLangContext() {
  return useContext(LangContext)
}
