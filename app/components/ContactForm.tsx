'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLocale } from '@/app/components/LocaleProvider';

const initialForm = { name: '', company: '', email: '', phone: '', service: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const { locale } = useLocale();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setFeedback(locale === 'id' ? 'Mengirim inquiry...' : 'Sending inquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to submit form');
      setStatus('success');
      setFeedback(locale === 'id' ? 'Inquiry diterima. Tim PT VPE akan menindaklanjuti.' : 'Inquiry received. PT VPE will follow up.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Unable to process inquiry.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-wrap"><span>{locale === 'id' ? 'Nama' : 'Name'} *</span><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder={locale === 'id' ? 'Nama lengkap' : 'Full name'} /></label>
        <label className="field-wrap"><span>Company *</span><input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required placeholder={locale === 'id' ? 'Nama perusahaan' : 'Company name'} /></label>
        <label className="field-wrap"><span>Email *</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="name@company.com" /></label>
        <label className="field-wrap"><span>Phone / WhatsApp</span><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08..." /></label>
      </div>
      <label className="field-wrap"><span>{locale === 'id' ? 'Kebutuhan layanan' : 'Service requirement'}</span><input value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="Rotating service / measurement / spare part supply" /></label>
      <label className="field-wrap"><span>{locale === 'id' ? 'Detail kebutuhan' : 'Requirement details'} *</span><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={6} placeholder={locale === 'id' ? 'Tuliskan equipment, masalah, scope, timeline, dan dokumen pendukung.' : 'Describe equipment, issue, scope, timeline, and supporting documents.'} /></label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'loading'} className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-70">
          {status === 'loading' ? (locale === 'id' ? 'Mengirim...' : 'Submitting...') : (locale === 'id' ? 'Kirim Inquiry' : 'Send Inquiry')} <Send className="h-4 w-4" />
        </button>
        <p className={`text-sm ${status === 'error' ? 'text-rose-600' : status === 'success' ? 'text-emerald-600' : 'text-slate-500'}`}>{feedback}</p>
      </div>
    </form>
  );
}
