'use client';

import { useLocale } from '@/app/components/LocaleProvider';

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1" aria-label="Language selector">
      {(['id', 'en'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
            locale === item ? 'bg-brand-800 text-white shadow-sm' : 'text-slate-600 hover:text-brand-800'
          }`}
          aria-pressed={locale === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
