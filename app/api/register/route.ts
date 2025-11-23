'use server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
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
