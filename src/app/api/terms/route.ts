import { NextRequest, NextResponse } from "next/server";
import terms from '@/mocks/terms.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const termId = searchParams.get('termsClassID');

  if (!termId || !(termId in terms)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Invalid term ID parameter',
    });
  };

  return NextResponse.json(terms[termId as keyof typeof terms], { status: 201 });
}