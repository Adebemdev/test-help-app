'use server';
import { NextResponse } from 'next/server';
import { formSchema } from '@/schema/index';

// Whitelisted domains — add yours here
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'https://backend-api.helpappafrica.com/provider-community',
];

function corsHeaders(origin?: string) {
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : 'null';

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    // Uncomment only if you're allowing cookies
    // 'Access-Control-Allow-Credentials': 'true',
  };
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin') ?? undefined;

  try {
    const body = await req.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten() },
        {
          status: 400,
          headers: corsHeaders(origin),
        }
      );
    }

    // TODO: Save to database or forward to external API

    return NextResponse.json(
      { success: true, message: 'Registration successful' },
      {
        status: 200,
        headers: corsHeaders(origin),
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      {
        status: 500,
        headers: corsHeaders(origin),
      }
    );
  }
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin') ?? undefined;

  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}
