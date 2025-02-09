'use client';

import { NavBarMenus } from '@/constants';
import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '../HamburgerMenu';
import { NAV_BAR_MENU } from '@/constants';
import { useState } from 'react';

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<NAV_BAR_MENU>(
    NAV_BAR_MENU.FAQ
  );

  return (
    <div className="fixed top-0 flex h-[56px] w-full justify-between bg-white px-[48px] sm:px-[24px] lg:h-[80px]">
      <Link
        href="https://wiblebiz.kia.com/"
        className="flex items-center">
        <div className="md-down:w-[120px] md-down:h-[40px] relative lg:h-full lg:w-[160px]">
          <Image
            src="/images/wible_BIZ.svg"
            alt="wible_biz_logo"
            layout="fill"
          />
        </div>
      </Link>
      <ul className="mr-[-20px] hidden lg:flex">
        {NavBarMenus.map((menu, idx) => (
          <Menu
            key={idx}
            isActive={menu.title === selectedMenu}
            {...menu}
          />
        ))}
      </ul>
      <div className="flex items-center lg:hidden">
        <HamburgerMenu selectedMenu={selectedMenu} />
      </div>
    </div>
  );
};

export default NavBar;
