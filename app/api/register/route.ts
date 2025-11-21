'use server';
import { NextResponse } from 'next/server';
import { formSchema } from '@/schema/index';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Example: Save to Database
    // await db.user.create({ data: parsed.data });

    return NextResponse.json(
      { success: true, message: 'Registration successful' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
