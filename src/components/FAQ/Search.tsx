import { useState } from 'react';
import Icon from '../Icon';

interface Props {
  keyword: string;
  setKeyword: (value: string) => void;
  resetSearch: () => void;
  resultCount: number;
}

const Search = ({ keyword, setKeyword, resetSearch, resultCount }: Props) => {
  const [inputValue, setInputValue] = useState<string>(keyword);

  // 키워드 입력 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 키워드 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKeyword(inputValue);
  };

  // 키워드 초기화 핸들러
  const clearKeyword = () => {
    setInputValue('');
    setKeyword('');
  };

  return (
    <>
      <div className="relative mb-[20px] w-full bg-background p-[20px] sm:mb-0 sm:bg-transparent sm:p-0 md:mb-[16px] md:p-[16px]">
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto h-[56px] w-[480px] border border-primary sm:h-[40px] sm:w-full md:h-[48px] md:w-[400px]">
          <input
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요"
            value={inputValue}
            onChange={handleChange}
            className="placeholder:font-secondary h-full w-full pl-[16px] pr-[94px] font-kiaRegular text-[18px] focus:outline-none sm:text-[14px] md:text-[16px]"
          />
          <div className="absolute right-0 top-0 flex h-full items-center">
            {inputValue && (
              <button
                onClick={clearKeyword}
                type="button">
                <Icon
                  iconName="clear"
                  className="md:x-[40px] md:y-[24px] h-[24px] w-[40px] sm:h-[20px] sm:w-[28px]"
                />
              </button>
            )}
            <button type="submit">
              <Icon
                iconName="search"
                className="h-[32px] w-[54px] sm:h-[24px] sm:w-[38px] md:h-[28px] md:w-[46px]"
              />
            </button>
          </div>
        </form>
      </div>
      {keyword.length > 0 && (
        <div className="my-[20px] flex w-full items-center justify-between md-down:my-[16px]">
          <span className="text-[20px] sm:text-[16px] md:text-[18px]">
            검색결과 총 <span className="text-accent">{resultCount}</span>건
          </span>
          <button
            onClick={resetSearch}
            className="flex items-center font-kiaRegular sm:text-[14px]">
            <Icon
              iconName="init"
              className="h-[24px] w-[24px] sm:w-[20px]"
            />
            검색초기화
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
