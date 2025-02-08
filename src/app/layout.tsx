import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { kiaSignatureFixRegular, kiaSignatureFixBold } from '@/utils/fonts';

export const metadata: Metadata = {
  title: '서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스',
  description:
    '위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
  keywords:
    '위블비즈,위블 비즈,모빌리티,구독서비스,차량구독,차량관리,업무용차량,법인차,관용차,전기차,FMS,스마트솔루션',
  openGraph: {
    siteName: '위블 비즈(Wible Biz)',
    title: '위블 비즈(Wible Biz)',
    description:
      '위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
    url: 'https://wiblebiz.kia.com',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/wb_sns_default.jpg'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: '서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스',
    description:
      '위블 비즈 서비스 도입 FAQ를 통해 차량 구독 패키지, 솔루션 구독 패키지 및 하이브리드 패키지 도입 방법을 자세하게 알아보세요',
    images: ['/images/og-image.png']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${kiaSignatureFixBold.variable} ${kiaSignatureFixRegular.variable} font-kiaBold`}>
        <NavBar />
        <div className="h-full w-full pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
