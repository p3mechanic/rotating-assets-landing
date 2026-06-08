import type { Metadata } from 'next';
import { RfqDatabaseTable } from '@/app/components/RfqDatabaseTable';

export const metadata: Metadata = {
  title: 'RFQ Database',
  description: 'Admin view for PT VPE RFQ submissions.',
  robots: {
    index: false,
    follow: false
  }
};

export default function RfqDatabasePage() {
  return (
    <main className="py-16 sm:py-20 lg:py-24">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-700">RFQ Database</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Website inquiry submissions.</h1>
          <p className="mt-4 text-slate-600">This page loads RFQ submissions from Google Sheets through the secured server route. Keep this page unlinked from public navigation.</p>
        </div>
        <RfqDatabaseTable />
      </div>
    </main>
  );
}
