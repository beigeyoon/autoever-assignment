'use client';

import { getTerms } from '@/lib/api/terms';
import { Term } from '@/types';
import { getTermsPeriod } from '@/utils/date';
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

const queryClient = new QueryClient();

const TermsContent = () => {
  const [selectedTermsVersion, setSelectedTermsVersion] = useState<number>(0);

  const { data: terms, isLoading } = useQuery({
    queryKey: ['JOIN_SERVICE_USE'],
    queryFn: () => getTerms({ termsClassID: 'JOIN_SERVICE_USE' }),
    // @ts-expect-error NOTE: 타입 구현이 복잡해지는 것을 방지
    select: data => data.data.terms as Term[]
  });

  useEffect(() => {
    if (terms) {
      setSelectedTermsVersion(terms[0].termsVersion);
    }
  }, [terms]);

  const contents = useMemo(() => {
    const selectedTerms = terms?.find(
      term => term.termsVersion === selectedTermsVersion
    );
    return selectedTerms?.contents;
  }, [terms, selectedTermsVersion]);

  if (isLoading) return <></>;
  return (
    <div className="pb-[32px] pt-[12px]">
      <div className="mb-[12px] mr-0 flex h-[46px] w-full justify-end sm:h-[40px]">
        <select
          className="h-full w-[228px] appearance-none border bg-[url('/icons/toggle.svg')] bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat p-2 pr-[40px] font-kiaRegular text-[14px] focus:outline-none md-down:w-full"
          value={selectedTermsVersion}
          onChange={e => setSelectedTermsVersion(Number(e.target.value))}>
          {terms?.map(term => (
            <option
              key={term.termsVersion}
              value={term.termsVersion}>
              {getTermsPeriod(term)}
            </option>
          ))}
        </select>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: contents as string }}
        className="font-kiaRegular text-[14px] sm:text-[12px]"
      />
    </div>
  );
};

const Terms = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TermsContent />
    </QueryClientProvider>
  );
};

export default Terms;
