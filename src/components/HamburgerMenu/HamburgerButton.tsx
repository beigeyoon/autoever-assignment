const HamburgerButton = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex h-[40px] w-[40px] flex-col items-center justify-center space-y-1 p-[10px]">
      <span
        className={`block h-[2px] w-full rounded bg-gray-800 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-[6px] rotate-45' : ''
        }`}></span>
      <span
        className={`block h-[2px] w-full rounded bg-gray-800 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}></span>
      <span
        className={`block h-[2px] w-full rounded bg-gray-800 transition-transform duration-300 ease-in-out ${
          isOpen ? '-translate-y-[6px] -rotate-45' : ''
        }`}></span>
    </button>
  );
};

export default HamburgerButton;
