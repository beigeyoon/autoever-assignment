import { apiFetch } from "../apiClient";

interface GetTermsProps {
  termsClassID: 'JOIN_SERVICE_USE' | 'STARTADMIN_ADMIN_PRIVACY',
}

export async function getTerms({
  termsClassID
}: GetTermsProps) {
  const searchParams = new URLSearchParams({ termsClassID });
  const endpoint = `/api/terms?${searchParams.toString()}`;

  return await apiFetch(endpoint, {
    method: 'GET',
  });
}