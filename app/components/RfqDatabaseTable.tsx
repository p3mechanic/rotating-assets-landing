'use client';

import { useState } from 'react';

type RfqRow = {
  id?: number;
  Timestamp?: string;
  Name?: string;
  Company?: string;
  Email?: string;
  'Phone / WhatsApp'?: string;
  'Service Requirement'?: string;
  'Requirement Details'?: string;
  Source?: string;
  Status?: string;
};

export function RfqDatabaseTable() {
  const [token, setToken] = useState('');
  const [rows, setRows] = useState<RfqRow[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function loadRows() {
    setStatus('loading');
    setMessage('Loading RFQ database...');

    try {
      const response = await fetch('/api/rfq/list', {
        headers: { 'x-admin-token': token },
        cache: 'no-store'
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to load RFQ database.');

      setRows(data.rows ?? []);
      setStatus('ready');
      setMessage(`${data.rows?.length ?? 0} RFQ submissions loaded.`);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to load RFQ database.');
    }
  }

  return (
    <div className="grid gap-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
        <label className="field-wrap">
          <span>Admin token</span>
          <input
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="Enter RFQ admin token"
          />
        </label>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="button" onClick={loadRows} disabled={!token || status === 'loading'} className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-70">
            {status === 'loading' ? 'Loading...' : 'Load RFQ database'}
          </button>
          <p className={`text-sm ${status === 'error' ? 'text-rose-600' : status === 'ready' ? 'text-emerald-600' : 'text-slate-500'}`}>{message}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Details</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={8}>No RFQ submissions loaded.</td>
                </tr>
              ) : rows.map((row) => (
                <tr key={row.id ?? `${row.Timestamp}-${row.Email}`} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{formatDate(row.Timestamp)}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">{row.Company || '-'}</td>
                  <td className="px-4 py-3 text-slate-700">{row.Name || '-'}</td>
                  <td className="px-4 py-3 text-slate-700">{row.Email || '-'}</td>
                  <td className="px-4 py-3 text-slate-700">{row['Phone / WhatsApp'] || '-'}</td>
                  <td className="px-4 py-3 text-slate-700">{row['Service Requirement'] || '-'}</td>
                  <td className="min-w-[320px] px-4 py-3 text-slate-700">{row['Requirement Details'] || '-'}</td>
                  <td className="px-4 py-3 text-slate-700">{row.Status || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function formatDate(value?: string) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}
