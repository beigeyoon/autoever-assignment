export type Category = {
  categoryID: string;
  name: string;
};

export type Faq = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
};

export type InquireMenu = {
  id: string;
  title: string;
  desc?: string;
  href: string;
  icon: string;
};