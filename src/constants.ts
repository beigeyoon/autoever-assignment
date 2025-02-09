export enum NAV_BAR_MENU {
  'ABOUT' = '서비스 소개',
  'FAQ' = '자주 묻는 질문',
  'NEWS' = '새소식',
  'REQUIRE' = '상담문의',
}

export const NavBarMenus = [
  {
    title: NAV_BAR_MENU.ABOUT,
    href: 'https://wiblebiz.kia.com/Guide',
  },
  {
    title: NAV_BAR_MENU.FAQ,
    href: 'https://wiblebiz.kia.com/FAQ',
  },
  {
    title: NAV_BAR_MENU.NEWS,
    href: 'https://wiblebiz.kia.com/News',
  },
  {
    title: NAV_BAR_MENU.REQUIRE,
    href: 'https://wiblebiz.kia.com/Counsel',
  },
];

export enum TAB {
  CONSULT = '서비스 도입',
  USAGE = '서비스 이용',
};

export const TabValue: Record<TAB, 'CONSULT' | 'USAGE'> = {
  [TAB.CONSULT]: 'CONSULT',
  [TAB.USAGE]: 'USAGE',
};