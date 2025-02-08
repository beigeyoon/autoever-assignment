import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-primary flex h-[176px] items-center justify-between px-[48px]">
      <div className="flex-1">
        <Image
          src="/images/kia_logo.svg"
          height={56}
          width={112}
          alt="kia-logo"
          className="mb-[2px]"
        />
        <div className="text-secondary font-kiaRegular min-w-[140px] text-[14px] leading-[24px]">
          <div className="inline-block">© 2023 KIA CORP.</div>
          <div className="inline-block">All Rights Reserved.</div>
        </div>
      </div>
      <div className="text-right">
        <div className="mb-[10px] text-[16px] text-white">
          <Link
            href="https://privacy.kia.com/overview/full-policy"
            className="ml-[24px]">
            개인정보 처리방침
          </Link>
          <Link
            href="https://privacy.kia.com/overview/full-policy"
            className="ml-[24px]">
            이용약관
          </Link>
        </div>
        <div className="text-secondary font-kiaRegular text-[14px]">
          <div className="ml-[12px] inline-block">
            서울특별시 서초구 헌릉로 12
          </div>
          <div className="ml-[12px] inline-block">기아㈜</div>
          <div className="ml-[12px] inline-block">대표: 송호성, 최준영</div>
          <div className="ml-[12px] inline-block">
            사업자등록번호: 119-81-02316
          </div>
          <div className="ml-[12px] inline-block">통신판매번호: 2006-07935</div>
          <div className="ml-[12px] inline-block">고객센터: 1833-4964</div>
          <div className="ml-[12px] inline-block">
            제휴문의: <u>wible.biz@kia.com</u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
