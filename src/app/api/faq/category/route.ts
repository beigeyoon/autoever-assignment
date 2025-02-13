import { NextRequest, NextResponse } from "next/server";
import category from '@/mocks/category.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tab = searchParams.get('tab');

  if (!tab || !(tab in category)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Invalid tab parameter',
    });
  }

  return NextResponse.json(category[tab as keyof typeof category], { status: 201 });
}