import { TAB } from '@/constants';
import { Faq } from '@/types';
import { useState } from 'react';
import Icon from '../Icon';

interface Props {
  faq: Faq;
  selectedTab: TAB;
}

const ListItem = ({ faq, selectedTab }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b ${isOpen ? 'bg-background' : ''}`}>
      <div
        onClick={toggleOpen}
        className={`relative flex cursor-pointer items-center py-[18px] pr-[92.8px] text-[18px] leading-[1.4] sm:py-[16px] md:py-[24px] ${isOpen ? 'border-b bg-background' : ''}`}>
        <div className="flex sm:flex-row lg:flex-1 md-down:flex-col">
          <div className="flex md-down:mb-[4px] md-down:leading-[1.6]">
            <div className="flex items-center justify-center px-[20px] font-kiaRegular text-[18px] text-secondary sm:text-[12px] md:text-[16px] lg:w-[184px] md-down:w-fit md-down:px-0">
              {selectedTab === TAB.CONSULT
                ? faq.subCategoryName
                : faq.categoryName}
            </div>
            {selectedTab === TAB.USAGE && (
              <>
                <Icon
                  iconName="toggle"
                  className="mx-[4px] my-auto h-[16px] w-[16px] opacity-30 sm:mx-[2px] lg:hidden"
                  customStyle={{
                    transform: 'rotate(270deg)'
                  }}
                />
                <div className="flex items-center justify-center font-kiaRegular text-secondary sm:text-[12px] md:text-[16px] lg:w-[148px] md-down:w-fit">
                  {faq.subCategoryName}
                </div>
              </>
            )}
          </div>
          <div className="flex-1 sm:text-[16px] md:text-[20px] lg:pl-[20px]">
            {faq.question}
          </div>
        </div>
        <Icon
          iconName="toggle"
          className={`absolute right-0 h-[32px] w-[56px] transition-transform duration-300 sm:h-[24px] sm:w-[28px] md:h-[28px] ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] pb-[14px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div
          dangerouslySetInnerHTML={{ __html: faq.answer }}
          className="border-b bg-white px-[32px] py-[24px] font-kiaRegular text-[18px] leading-[1.8] sm:px-0 sm:py-[16px] sm:text-[14px] md:px-[24px] md:text-[16px]"
        />
      </div>
    </div>
  );
};

export default ListItem;
