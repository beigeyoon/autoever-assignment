interface Props {
  iconName: string;
  className?: string;
  customStyle?: React.CSSProperties;
}

const Icon = ({ iconName, className, customStyle }: Props) => {
  return (
    <div
      className={`h-[24px] w-[40px] before:absolute before:inset-0 before:bg-contain before:bg-center before:bg-no-repeat before:content-[''] ${className ? className : ''}`}
      style={{
        backgroundImage: `url('/icons/${iconName}.svg')`,
        backgroundSize: '100% 100%',
        transformOrigin: 'center center',
        ...customStyle
      }}
    />
  );
};

export default Icon;
