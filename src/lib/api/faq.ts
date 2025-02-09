import { apiFetch } from "../apiClient";

export async function getCategory(tab: 'CONSULT' | 'USAGE') {
  return await apiFetch(`/api/faq/category?tab=${tab}`, {
    method: 'GET',
  })
}

export async function getFaq(
  tab: 'CONSULT' | 'USAGE',
  pagination: number = 0,
) {
  const limit = 10;
  const offset = pagination * limit;
  
  return await apiFetch(`/api/faq?tab=${tab}&limit=${limit}&offset=${offset}`, {
    method: 'GET',
  });
}