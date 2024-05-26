type THeaderProps = {
  className: string;
  text: string;
};

const SectionHeader = ({ className, text }: THeaderProps) => {
  return (
    <h1
      className={`text-center border-b-2 border-red-500 pb-2 mx-auto text-4xl ${className}`}
    >
      {text}
    </h1>
  );
};

export default SectionHeader;
