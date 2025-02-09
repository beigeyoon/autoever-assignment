'use client';
import { getCategory, getFaq } from '@/lib/api/faq';
import { useState } from 'react';
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

const queryClient = new QueryClient();

const FAQContent = () => {
  const [tab, setTab] = useState<TAB>(TAB.CONSULT);

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories', tab],
    queryFn: () => getCategory(TabValue[tab]),
    select: data => data.data as Category[]
  });

  const {
    data,
    isLoading: isLoadingFaqs,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ['faqs', tab],
    queryFn: ({ pageParam }) => getFaq(TabValue[tab], pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
      const { pageInfo } = lastPage.data;
      return pageInfo.nextOffset < pageInfo.totalRecord
        ? pageInfo.nextOffset / pageInfo.limit
        : undefined;
    }
  });

  // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
  const faqs = data?.pages.flatMap(page => page.data.items) || [];

  if (isLoadingCategories || isLoadingFaqs) return <></>;
  return (
    <>
      <Tabs
        tab={TabValue[tab]}
        changeTab={setTab}
      />
      <List
        categories={categories || []}
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
