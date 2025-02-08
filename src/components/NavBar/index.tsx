import { NavBarMenus } from '@/constants';
import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="fixed top-0 flex h-[80px] w-full justify-between px-[48px]">
      <Link
        href="https://wiblebiz.kia.com/"
        className="flex items-center">
        <Image
          src="/images/wible_BIZ.svg"
          width={160}
          height={80}
          alt="wible_biz_logo"
          className="my-auto"
        />
      </Link>
      <ul className="mr-[-20px] flex">
        {NavBarMenus.map((menu, idx) => (
          <Menu
            key={idx}
            isActive={menu.title === '자주 묻는 질문'}
            {...menu}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
