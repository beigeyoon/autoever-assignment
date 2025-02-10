import { InquireMenus } from '@/constants';
import { InquireMenu } from '@/types';
import Icon from '../Icon';

const Inquire = () => {
  const downloadMenu = InquireMenus[0];
  const writeMenu = InquireMenus[1];
  const talkMenu = InquireMenus[2];

  return (
    <>
      <h1 className="mb-[24px] mt-[48px] text-[24px] sm:mb-[16px] sm:text-[20px]">
        서비스 문의
      </h1>
      <div className="grid w-full gap-[24px] md:grid-cols-2 lg:grid-cols-3">
        <MenuButton menu={downloadMenu} />
        <MenuButton menu={writeMenu} />
        <MenuButton menu={talkMenu} />
      </div>
    </>
  );
};

export default Inquire;

const MenuButton = ({ menu }: { menu: InquireMenu }) => {
  return (
    <a
      key={menu.id}
      href={menu.href}
      download={menu.id === 'download'}
      target="_blank"
      className={`flex h-[80px] w-full items-center justify-center border border-primary sm:h-[72px] ${menu.id === 'talk' ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <Icon
        iconName={menu.icon}
        className="mr-[8px] h-[48px] w-[48px] md-down:h-[32px] md-down:w-[32px]"
      />
      <div className="flex flex-col leading-6">
        <span className="text-[18px] md-down:text-[16px]">{menu.title}</span>
        {menu.desc && (
          <span className="font-kiaRegular text-[14px] text-secondary">
            {menu.desc}
          </span>
        )}
      </div>
    </a>
  );
};
