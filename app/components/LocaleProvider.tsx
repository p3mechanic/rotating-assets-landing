'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale, Localized } from '@/app/lib/site';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  pick: (copy: Localized) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('id');

  useEffect(() => {
    const stored = window.localStorage.getItem('vpe-locale');
    if (stored === 'id' || stored === 'en') setLocaleState(stored);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem('vpe-locale', nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      pick: (copy: Localized) => copy[locale]
    }),
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside LocaleProvider');
  return context;
}
