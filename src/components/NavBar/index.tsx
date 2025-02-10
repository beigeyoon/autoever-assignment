'use client';

import { NavBarMenus } from '@/constants';
import Menu from './Menu';
import Link from 'next/link';
import Icon from '../Icon';
import HamburgerMenu from '../HamburgerMenu';
import { NAV_BAR_MENU } from '@/constants';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<NAV_BAR_MENU>(
    NAV_BAR_MENU.FAQ
  );
  const [hasShadow, setHasShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 flex h-[56px] w-full justify-between bg-white px-[48px] sm:px-[24px] lg:h-[80px] ${hasShadow ? 'shadow-[0_1px_25px_rgba(0,0,0,0.10)]' : ''}`}>
      <Link
        href="https://wiblebiz.kia.com/"
        className="flex items-center">
        <Icon
          iconName="wible_BIZ"
          className="lg:h-full lg:w-[160px] md-down:h-[40px] md-down:w-[120px]"
        />
        {/* <div className="relative lg:h-full lg:w-[160px] md-down:h-[40px] md-down:w-[120px]">
          <Image
            src="/images/wible_BIZ.svg"
            alt="wible_biz_logo"
            layout="fill"
          />
        </div> */}
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
