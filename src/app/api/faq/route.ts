import { NextRequest, NextResponse } from "next/server";
import faq from '@/mocks/faq.json';
import category from '@/mocks/category.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const tab = searchParams.get('tab');
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const faqCategoryID = searchParams.get('faqCategoryID');
  const question = searchParams.get('question');

  if (!tab || !(tab in faq)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Invalid tab parameter',
    });
  }

  let filteredItems = faq[tab as keyof typeof faq];
  if (faqCategoryID) {
    const categoryName = getCategoryName({ tab, categoryID: faqCategoryID });
    filteredItems = filteredItems.filter((item) => {
      if (tab === 'CONSULT') {
        return item.subCategoryName === categoryName;
      }
      if (tab === 'USAGE') {
        return item.categoryName === categoryName;
      }
    })
  };
  if (question) {
    filteredItems = filteredItems.filter((item) => {
      return item.categoryName.toLowerCase().includes(question) || item.subCategoryName.toLocaleLowerCase().includes(question) || item.question.toLocaleLowerCase().includes(question) || item.answer.toLocaleLowerCase().includes(question);
    })
  };
  
  const totalRecord = filteredItems.length;

  const items = filteredItems.slice(offset, offset + limit);
  
  const pageInfo = {
    totalRecord,
    offset,
    limit,
    prevOffset: Math.max(0, offset - limit),
    nextOffset: offset + limit,
  };

  return NextResponse.json({ pageInfo, items }, { status: 200 });
}

const getCategoryName = ({ tab, categoryID }: { tab: string; categoryID: string }): string | undefined => {
  const categories = category[tab as 'CONSULT' | 'USAGE'];

  const matchingCategory = categories.find((category) => category.categoryID === categoryID);

  return matchingCategory ? matchingCategory.name : undefined;
};