import FAQ from '@/components/FAQ';

export default async function Page() {
  return (
    <div className="px-[48px] sm:px-[24px]">
      <h1 className="flex h-[192px] w-full flex-col justify-center text-center text-[48px] sm:h-[124px] sm:text-[24px] md:h-[160px] md:text-[40px]">
        자주 묻는 질문
        <p className="font-kiaRegular md-down:text-[14px] mt-[0.4em] text-[16px]">
          궁금하신 내용을 빠르게 찾아보세요.
        </p>
      </h1>
      <FAQ />
    </div>
  );
}
