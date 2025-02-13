interface Props {
  iconName: string;
  className?: string;
  customStyle?: React.CSSProperties;
}

const Icon = ({ iconName, className, customStyle }: Props) => {
  return (
    <div
      className={`${className ? className : ''}`}
      style={{
        backgroundImage: `url('/icons/${iconName}.svg')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...customStyle
      }}
    />
  );
};

export default Icon;
