import { TAB } from '@/constants';

interface Props {
  tab: keyof typeof TAB;
  changeTab: (targetTab: TAB) => void;
}

const Tabs = ({ tab, changeTab }: Props) => {
  return (
    <div className="mb-[40px] flex w-full sm:mb-[24px] sm:h-[40px] md:mb-[32px] md:h-[48px] lg:h-[56px]">
      {Object.keys(TAB).map(value => {
        const targetValue = value as keyof typeof TAB;
        return (
          <button
            key={value}
            onClick={() => changeTab(TAB[targetValue])}
            className={`h-full flex-1 border p-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px] ${tab === value ? 'border-primary bg-primary font-bold text-white' : 'font-kiaRegular'}`}>
            {TAB[targetValue]}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
