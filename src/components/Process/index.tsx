import { ProcessSteps } from '@/constants';
import { ProcessStep } from '@/types';
import Icon from '../Icon';

const Process = () => {
  return (
    <>
      <h1 className="mb-[24px] mt-[48px] text-[24px] sm:mb-[16px] sm:text-[20px]">
        이용 프로세스 안내
      </h1>
      <div className="flex gap-[12px] sm:gap-[20px] md:gap-[24px] md-down:flex-col">
        {ProcessSteps.map((step: ProcessStep, idx: number) => (
          <div
            key={step.id}
            className="relative flex flex-1 items-center px-[24px] md-down:px-0">
            {idx !== 0 && (
              <Icon
                iconName="toggle"
                className="absolute left-[-24px] h-[36px] w-[36px] opacity-30 md-down:hidden"
                customStyle={{
                  transform: 'rotate(270deg)'
                }}
              />
            )}
            <div
              key={step.id}
              className="flex flex-col md-down:flex-row md-down:items-center">
              <Icon
                iconName={step.icon}
                className="mb-[8px] h-[48px] w-[48px] sm:mr-[12px] sm:h-[40px] sm:w-[40px] md:mr-[16px]"
              />
              <div className="leading-5">
                <h2 className="text-[18px] sm:text-[16px]">{step.title}</h2>
                <p className="mt-[8px] font-kiaRegular text-[16px] text-secondary sm:mt-[4px] sm:text-[14px]">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Process;
