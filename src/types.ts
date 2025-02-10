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

export type ProcessStep = {
  id: string;
  title: string;
  desc: string;
  icon: string;
};

export type AppstoreMenu = {
  id: string;
  title: string;
  icon: string;
  href: string;
};