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

const queryClient = new QueryClient();

const FAQContent = () => {
  const [selectedTab, setSelectedTab] = useState<TAB>(TAB.CONSULT);
  const [selectedCategory, setSelectedCategory] =
    useState<Category['categoryID']>('ALL');
  const [keyword, setKeyword] = useState<string>('');

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories', selectedTab],
    queryFn: () => getCategory(TabValue[selectedTab]),
    select: data => [
      { categoryID: 'ALL', name: '전체' },
      ...(data.data as Category[])
    ]
  });

  const {
    data: faqData,
    isLoading: isLoadingFaqs,
    fetchNextPage,
    hasNextPage
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
  }, []);

  const resetSearch = useCallback(() => {
    setSelectedCategory('ALL');
    setKeyword('');
  }, []);

  // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
  const faqs = faqData?.pages.flatMap(page => page.data.items) || [];

  if (isLoadingCategories || isLoadingFaqs) return <></>;
  return (
    <>
      <Tabs
        tab={TabValue[selectedTab]}
        changeTab={changeTap}
      />
      <Search
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
