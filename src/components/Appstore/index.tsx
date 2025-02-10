import { AppstoreMenus } from '@/constants';
import Icon from '../Icon';

const Appstore = () => {
  return (
    <div className="mt-[48px] bg-background p-[32px] sm:p-[24px]">
      <h1 className="mb-[24px] text-center text-[24px] sm:mb-[4px] sm:text-[16px] md:text-[20px]">
        <span className="text-accent">위블 비즈 App</span> 지금 만나보세요!
      </h1>
      <div className="flex justify-center gap-[16px] sm:flex-col sm:items-center sm:gap-0">
        {AppstoreMenus.map(menu => (
          <a
            key={menu.id}
            href={menu.href}
            target="_blank"
            className="flex h-[60px] w-[296px] items-center justify-center bg-white sm:mt-[12px] sm:h-[48px] md:h-[56px] md-down:w-[264px]">
            <Icon
              iconName={menu.icon}
              className="mr-[4px] h-[28px] w-[28px] md-down:h-[24px] md-down:w-[24px]"
            />
            <span className="text-[16px] md-down:text-[14px]">
              {menu.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Appstore;
