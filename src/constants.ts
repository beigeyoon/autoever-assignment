import { InquireMenu, ProcessStep } from "./types";

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

export const InquireMenus: InquireMenu[] = [
  {
    id: 'download',
    title: '상품제안서 다운로드',
    href: '/pdf/위블비즈 상품제안서.pdf',
    icon: 'download',
  },
  {
    id: 'write',
    title: '상담문의 등록하기',
    href: 'https://wiblebiz.kia.com/Counsel',
    icon: 'write',
  },
  {
    id: 'talk',
    title: '카톡으로 문의하기',
    desc: 'ID: Wible Biz(위블 비즈)',
    href: 'https://pf.kakao.com/_xfLxjdb',
    icon: 'talk',
  },
];

export const ProcessSteps: ProcessStep[] = [
  {
    id: 'register',
    title: '1. 문의 등록',
    desc: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
    icon: 'register',
  },
  {
    id: 'admin',
    title: '2. 관리자 설정',
    desc: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
    icon: 'admin',
  },
  {
    id: 'join',
    title: '3. 임직원 가입',
    desc: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
    icon: 'join',
  },
  {
    id: 'usage',
    title: '4. 서비스 이용',
    desc: '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
    icon: 'usage',
  },
];