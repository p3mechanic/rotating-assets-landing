import { NextResponse } from 'next/server';

const APPS_SCRIPT_URL = process.env.RFQ_APPS_SCRIPT_URL;
const RFQ_SHARED_SECRET = process.env.RFQ_SHARED_SECRET;
const RFQ_ADMIN_TOKEN = process.env.RFQ_ADMIN_TOKEN;

export async function GET(request: Request) {
  try {
    const adminToken = request.headers.get('x-admin-token');

    if (!RFQ_ADMIN_TOKEN || adminToken !== RFQ_ADMIN_TOKEN) {
      return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
    }

    if (!APPS_SCRIPT_URL || !RFQ_SHARED_SECRET) {
      return NextResponse.json(
        { message: 'RFQ service is not configured.' },
        { status: 500 }
      );
    }

    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('action', 'list');
    url.searchParams.set('secret', RFQ_SHARED_SECRET);

    const response = await fetch(url.toString(), { cache: 'no-store' });
    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.ok) {
      return NextResponse.json(
        { message: data?.message || 'Unable to load RFQ database.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, rows: data.rows ?? [] });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Unable to load RFQ database.' },
      { status: 500 }
    );
  }
}
