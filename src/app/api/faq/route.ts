import { NextRequest, NextResponse } from "next/server";
import faq from '@/mocks/faq.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const tab = searchParams.get('tab');
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  if (!tab || !(tab in faq)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Invalid tab parameter',
    });
  }

  const allItems = faq[tab as keyof typeof faq];
  const totalRecord = allItems.length;

  const items = allItems.slice(offset, offset + limit);

  const pageInfo = {
    totalRecord,
    offset,
    limit,
    prevOffset: Math.max(0, offset - limit),
    nextOffset: offset + limit,
  };

  return NextResponse.json({ pageInfo, items }, { status: 200 });
}