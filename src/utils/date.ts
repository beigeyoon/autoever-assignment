import { Term } from "@/types";

export const formatDate = (timestamp: number) => {
  if (timestamp === 0) return '현재'
  const date = new Date(timestamp);
  const formattedDate = date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '.');
  return formattedDate;
}

export const getTermsPeriod = (term: Term) => {
  const adjustedStartDate = new Date(term.startDate);
  adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);

  const startDate = formatDate(adjustedStartDate.getTime());
  const endDate = formatDate(term.endDate);
  return `${startDate} ~ ${endDate}`;
}