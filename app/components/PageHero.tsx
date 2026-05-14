'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = '/contact',
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-0 bg-grid-light opacity-30" />
      <div className="absolute inset-y-0 left-0 w-full bg-contour-soft opacity-80 contour-mask-soft" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1),rgba(255,255,255,0.62)_42%,rgba(255,255,255,0.90)_72%)]" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-100/75 blur-3xl" />
      <div className="container-shell relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-9 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary justify-center">
              {primaryLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryHref && secondaryLabel ? <Link href={secondaryHref} className="btn-secondary justify-center">{secondaryLabel}</Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
