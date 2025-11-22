'use server';
import { NextResponse } from 'next/server';
import { formSchema } from '@/schema/index';

// Whitelisted domains — add yours here
// const ALLOWED_ORIGINS = [
//   'http://localhost:3000',
//   'https://backend-api.helpappafrica.com/provider-community',
// ];

// function corsHeaders(origin?: string) {
//   const allowedOrigin =
//     origin && ALLOWED_ORIGINS.includes(origin) ? origin : 'null';

//   return {
//     'Access-Control-Allow-Origin': allowedOrigin,
//     'Access-Control-Allow-Methods': 'POST, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     // Uncomment only if you're allowing cookies
//     // 'Access-Control-Allow-Credentials': 'true',
//   };
// }

export async function POST(req: Request) {
  //const origin = req.headers.get('origin') ?? undefined;

  try {
    const body = await req.json();
    const response = await fetch(
      'https://backend-api.helpappafrica.com/provider-community',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );
    const parsedResponse = await response.json();

    if (parsedResponse.statusCode > 300 || parsedResponse.statusCode < 200) {
      return NextResponse.json(
        { success: false, errors: parsedResponse.message },
        {
          status: parsedResponse.statusCode,
          //  headers: corsHeaders(origin),
        }
      );
    }

    // TODO: Save to database or forward to external API

    return NextResponse.json(
      { success: true, message: 'Registration successful' },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      {
        status: 500,
        //    headers: corsHeaders(origin),
      }
    );
  }
}

// export async function OPTIONS(req: Request) {
//   const origin = req.headers.get('origin') ?? undefined;

//   return new Response(null, {
//     status: 204,
//     headers: corsHeaders(origin),
//   });
// }
