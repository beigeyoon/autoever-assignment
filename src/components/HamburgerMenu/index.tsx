import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import SlideMenu from './SlideMenu';
import { NAV_BAR_MENU } from '@/constants';

interface Props {
  selectedMenu: NAV_BAR_MENU;
}

const HamburgerMenu = ({ selectedMenu }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <HamburgerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <SlideMenu
        isOpen={isOpen}
        selectedMenu={selectedMenu}
      />
    </>
  );
};

export default HamburgerMenu;
