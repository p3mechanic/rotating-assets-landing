import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, message } = body ?? {};

    if (!name || !company || !email || !message) {
      return NextResponse.json({ message: 'Name, company, email, and requirement details are required.' }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      message: 'Inquiry received. PT VPE will review the requirement details and respond through the contact information provided.',
      payload: { name, company, email, phone: body.phone ?? '', service: body.service ?? '', message }
    });
  } catch {
    return NextResponse.json({ message: 'Unable to process inquiry.' }, { status: 500 });
  }
}
