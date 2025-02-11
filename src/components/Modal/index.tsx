'use client';

import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon';

interface Props {
  trigger: ReactNode;
  title: string;
  content: ReactNode;
  className?: string;
}

const Modal = ({ trigger, title, content, className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className={className ? className : ''}>
      {/* 모달 트리거 버튼 */}
      <div onClick={() => setIsOpen(true)}>{trigger}</div>

      {/* 모달 내용 */}
      {isOpen &&
        createPortal(
          <div
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-[48px] sm:p-[24px]">
            <div
              onClick={e => e.stopPropagation()}
              className="relative h-full w-full max-w-[975px] overflow-y-scroll bg-white p-6 px-[32px] py-0 shadow-lg md-down:px-[20px]">
              <div className="mt-[16px] flex h-[62px] items-center border-b-[2px] border-primary text-[20px] md-down:mt-[4px] md-down:h-[58px] md-down:text-[16px]">
                {title}
              </div>
              <button
                onClick={handleClose}
                className="absolute right-[16px] top-[16px] p-[16px] text-xl font-bold text-gray-600 md-down:right-0 md-down:top-[4px]">
                <Icon
                  iconName="modal_close"
                  className="h-[28px] w-[28px] md-down:h-[24px] md-down:w-[24px]"
                />
              </button>
              {content}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Modal;
