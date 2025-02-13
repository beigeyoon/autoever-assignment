import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  isActive: boolean;
}

const Menu = ({ title, href, isActive }: Props) => {
  return (
    <Link
      href={href}
      className="group relative mx-[16px] flex h-full items-center px-[4px] text-[18px] font-bold">
      <span className="my-auto">{title}</span>
      <span
        className={`absolute bottom-0 left-0 h-[4px] transition-all duration-300 ease-in-out ${
          isActive
            ? 'bg-accent w-full'
            : 'bg-accent w-0 bg-opacity-50 opacity-50 group-hover:w-full'
        }`}
        style={{
          transformOrigin: 'left'
        }}
      />
    </Link>
  );
};

export default Menu;
