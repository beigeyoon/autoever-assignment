import { NavBarMenus, NAV_BAR_MENU } from '@/constants';

interface SlideMenuProps {
  isOpen: boolean;
  selectedMenu: NAV_BAR_MENU;
}

const SlideMenu = ({ isOpen, selectedMenu }: SlideMenuProps) => {
  return (
    <div
      className={`text-primary fixed left-0 top-[56px] h-[calc(100vh-56px)] w-full transform bg-white text-center transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <ul className="mt-[80px]">
        {NavBarMenus.map((menu, idx) => (
          <li
            key={idx}
            className="mb-[8px] flex h-[56px] flex-col justify-center">
            <a
              className={`text-[24px] ${selectedMenu === menu.title ? 'text-accent' : ''}`}
              href={menu.href}>
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideMenu;
