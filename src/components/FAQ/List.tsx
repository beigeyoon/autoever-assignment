import { TAB } from '@/constants';
import { Category, Faq } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import ListItem from './ListItem';

interface Props {
  selectedTab: TAB;
  categories: Category[];
  faqs: Faq[];
  showMore: () => void;
  hasNextPage: boolean;
  selectedCategory: Category['categoryID'];
  changeCategory: Dispatch<SetStateAction<string>>;
}

const List = ({
  selectedTab,
  categories,
  faqs,
  showMore,
  hasNextPage,
  selectedCategory,
  changeCategory
}: Props) => {
  return (
    <>
      <ul className="mb-[20px] sm:my-[16px] md:mb-[16px]">
        {categories.map(category => (
          <li
            key={category.categoryID}
            className="inline-block">
            <button
              onClick={() => changeCategory(category.categoryID)}
              className={`h-[48px] text-nowrap px-[20px] text-[18px] sm:h-[36px] sm:rounded-[18px] sm:px-[12px] sm:text-[14px] md:h-[44px] md:rounded-[22px] md:px-[14px] md:text-[16px] ${selectedCategory === category.categoryID ? 'rounded-[24px] bg-accent text-white' : ''}`}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className="border-t-[2px] border-primary">
        {faqs.map(faq => (
          <ListItem
            key={faq.id}
            faq={faq}
            selectedTab={selectedTab}
          />
        ))}
        {hasNextPage && (
          <div className="mt-[32px] flex w-full justify-center md:mt-[24px]">
            <button
              onClick={showMore}
              className="h-[56px] font-kiaRegular text-[18px] md:h-[48px] md:text-[16px]">
              + 더보기
            </button>
          </div>
        )}
      </ul>
    </>
  );
};

export default List;
