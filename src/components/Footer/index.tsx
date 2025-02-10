import Link from 'next/link';
import Icon from '../Icon';

const Footer = () => {
  return (
    <div className="flex h-[176px] flex-row-reverse items-center justify-between bg-primary px-[48px] sm:h-[284px] sm:px-[24px] sm:pb-[29px] sm:pt-[18px] md:h-[296px] md:justify-between md:pb-[44px] md:pt-[34px] md-down:flex-col md-down:items-start">
      <div className="text-right md-down:text-left">
        <div className="mb-[10px] flex items-center text-[16px] text-white sm:h-[48px] sm:text-[14px] md:h-[52px] md-down:mb-0">
          <Link
            href="https://privacy.kia.com/overview/full-policy"
            className="ml-[24px] md-down:ml-0">
            개인정보 처리방침
          </Link>
          <Link
            href="https://privacy.kia.com/overview/full-policy"
            className="ml-[24px] flex items-center sm:ml-[16px] md:h-[52px]">
            이용약관
          </Link>
        </div>
        <div className="font-kiaRegular text-[14px] text-secondary sm:text-[12px] sm:leading-[22px] md:leading-[24px]">
          <div className="ml-[12px] inline-block md-down:ml-0">
            서울특별시 서초구 헌릉로 12
          </div>
          <div className="ml-[12px] inline-block">기아㈜</div>
          <br className="md:hidden lg:hidden" />
          <div className="ml-[12px] inline-block sm:ml-0">
            대표: 송호성, 최준영
          </div>
          <br className="lg:hidden" />
          <div className="ml-[12px] inline-block md-down:ml-0">
            사업자등록번호: 119-81-02316
          </div>
          <br className="md:hidden lg:hidden" />
          <div className="ml-[12px] inline-block sm:ml-0">
            통신판매번호: 2006-07935
          </div>
          <br className="lg:hidden" />
          <div className="ml-[12px] inline-block md-down:ml-0">
            고객센터: 1833-4964
          </div>
          <div className="ml-[12px] inline-block">
            제휴문의: <u>wible.biz@kia.com</u>
          </div>
        </div>
      </div>
      <div>
        <Icon
          iconName="kia_logo"
          className="mb-[2px] h-[56px] w-[112px] sm:ml-[-24px] sm:h-[32px] md:ml-[-8px] md:h-[48px] md-down:mb-[-2px]"
        />
        <div className="min-w-[140px] max-w-[260px] font-kiaRegular text-[14px] leading-[24px] text-secondary sm:text-[12px]">
          <div className="inline-block">
            © 2023 KIA CORP. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
