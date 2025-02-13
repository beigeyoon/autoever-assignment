'use client';
import { getCategory, getFaq } from '@/lib/api/faq';
import { useCallback, useMemo, useState } from 'react';
import { TAB, TabValue } from '@/constants';
import Tabs from './Tabs';
import List from './List';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useInfiniteQuery
} from '@tanstack/react-query';
import { Category } from '@/types';
import Search from './Search';
import Icon from '../Icon';
import { useRef } from 'react';

const queryClient = new QueryClient();

const FAQContent = () => {
  const [selectedTab, setSelectedTab] = useState<TAB>(TAB.CONSULT);
  const [selectedCategory, setSelectedCategory] =
    useState<Category['categoryID']>('ALL');
  const [keyword, setKeyword] = useState<string>('');
  const searchRef = useRef<{ resetInput: () => void }>(null);

  const { data: categories } = useQuery({
    queryKey: ['categories', selectedTab],
    queryFn: () => getCategory(TabValue[selectedTab]),
    select: data => [
      { categoryID: 'ALL', name: '전체' },
      ...(data.data as Category[])
    ]
  });

  const {
    data: faqData,
    fetchNextPage,
    hasNextPage,
    isLoading: isLoadingFaqs
  } = useInfiniteQuery({
    queryKey: ['faqs', selectedTab, selectedCategory, keyword],
    queryFn: ({ pageParam }) =>
      getFaq({
        tab: TabValue[selectedTab],
        pagination: pageParam,
        faqCategoryID: selectedCategory,
        question: keyword
      }),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
      const { pageInfo } = lastPage.data;
      return pageInfo.nextOffset < pageInfo.totalRecord
        ? pageInfo.nextOffset / pageInfo.limit
        : undefined;
    }
  });

  const resultCount = useMemo(
    // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
    () => faqData?.pages[0].data.pageInfo.totalRecord,
    [faqData]
  );

  const changeTap = useCallback((targetTab: TAB) => {
    setSelectedTab(targetTab);
    setSelectedCategory('ALL');
    setKeyword('');
    if (searchRef.current) {
      searchRef.current.resetInput();
    }
  }, []);

  const resetSearch = useCallback(() => {
    setSelectedCategory('ALL');
    setKeyword('');
    if (searchRef.current) {
      searchRef.current.resetInput();
    }
  }, []);

  // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
  const faqs = faqData?.pages.flatMap(page => page.data.items) || [];

  return (
    <>
      <Tabs
        tab={TabValue[selectedTab]}
        changeTab={changeTap}
      />
      <Search
        ref={searchRef}
        keyword={keyword}
        setKeyword={setKeyword}
        resetSearch={resetSearch}
        resultCount={resultCount}
      />
      <List
        selectedTab={selectedTab}
        categories={categories || []}
        selectedCategory={selectedCategory}
        changeCategory={setSelectedCategory}
        faqs={faqs || []}
        showMore={fetchNextPage}
        hasNextPage={hasNextPage}
      />
      {faqs.length === 0 && (
        <div className="flex flex-col items-center border-b py-[160px] text-secondary md-down:py-[120px]">
          {isLoadingFaqs ? (
            <Icon
              iconName="loading"
              className="h-[56px] w-[56px] animate-spin stroke-secondary"
            />
          ) : (
            <>
              <Icon
                iconName="no_data"
                className="mb-[16px] h-[56px] w-[56px] sm:mb-[8px] sm:h-[32px] sm:w-[32px] md:mb-[12px] md:h-[48px] md:w-[48px]"
              />
              <span className="font-kiaRegular text-[18px] sm:text-[14px] md:text-[16px]">
                검색결과가 없습니다.
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

const FAQ = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FAQContent />
    </QueryClientProvider>
  );
};

export default FAQ;
