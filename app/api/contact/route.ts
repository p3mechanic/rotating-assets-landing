import { NextResponse } from 'next/server';

const APPS_SCRIPT_URL = process.env.RFQ_APPS_SCRIPT_URL;
const RFQ_SHARED_SECRET = process.env.RFQ_SHARED_SECRET;

export async function POST(request: Request) {
  try {
    if (!APPS_SCRIPT_URL || !RFQ_SHARED_SECRET) {
      return NextResponse.json(
        { message: 'RFQ service is not configured.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, company, email, message } = body ?? {};

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { message: 'Name, company, email, and requirement details are required.' },
        { status: 400 }
      );
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        secret: RFQ_SHARED_SECRET,
        source: 'PT VPE Website - Netlify',
        name,
        company,
        email,
        phone: body.phone ?? '',
        service: body.service ?? '',
        message
      }),
      cache: 'no-store'
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.ok) {
      return NextResponse.json(
        { message: data?.message || 'Unable to submit RFQ.' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: data.message || 'Inquiry received. PT VPE will follow up.'
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Unable to process inquiry.' },
      { status: 500 }
    );
  }
}
