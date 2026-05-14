import type { Localized } from '@/app/lib/site';
import { cn } from '@/app/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center')}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function LocalizedHeading({
  eyebrow,
  title,
  description,
  locale,
  center = false
}: {
  eyebrow: Localized;
  title: Localized;
  description?: Localized;
  locale: 'id' | 'en';
  center?: boolean;
}) {
  return <SectionHeading eyebrow={eyebrow[locale]} title={title[locale]} description={description?.[locale]} center={center} />;
}
