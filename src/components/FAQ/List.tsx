import { Category, Faq } from '@/types';

interface Props {
  categories: Category[];
  faqs: Faq[];
  showMore: () => void;
  hasNextPage: boolean;
}

const List = ({ categories, faqs, showMore, hasNextPage }: Props) => {
  return (
    <>
      <ul className="flex">
        <li>전체</li>
        {categories.map(category => (
          <li key={category.categoryID}>{category.name}</li>
        ))}
      </ul>
      <ul>
        {faqs.map(faq => (
          <ListItem
            key={faq.id}
            faq={faq}
          />
        ))}
        {hasNextPage && <button onClick={showMore}>더보기</button>}
      </ul>
    </>
  );
};

export default List;

const ListItem = ({ faq }: { faq: Faq }) => {
  return (
    <div>
      {faq.subCategoryName}
      {faq.question}
      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
    </div>
  );
};
