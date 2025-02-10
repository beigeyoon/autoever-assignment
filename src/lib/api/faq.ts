import { apiFetch } from "../apiClient";

export async function getCategory(tab: 'CONSULT' | 'USAGE') {
  return await apiFetch(`/api/faq/category?tab=${tab}`, {
    method: 'GET',
  })
}

interface GetFaqProps {
  tab: 'CONSULT' | 'USAGE',
  pagination: number,
  faqCategoryID: string,
  question: string,
}

export async function getFaq({
  tab, pagination = 0, faqCategoryID, question
}: GetFaqProps) {
  const limit = 10;
  const offset = pagination * limit;

  const searchParams = new URLSearchParams({
    tab,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  if (faqCategoryID.length > 0 && faqCategoryID !== 'ALL') {
    searchParams.append('faqCategoryID', faqCategoryID);
  };

  if (question.length > 0) {
    searchParams.append('question', question.toLocaleLowerCase());
  };

  const endpoint = `/api/faq?${searchParams.toString()}`;

  
  return await apiFetch(endpoint, {
    method: 'GET',
  });
}