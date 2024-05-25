const SectionHeader = ({ className }: { className: string }) => {
  return (
    <h1
      className={`text-center border-b-2 border-red-500 pb-2 mx-auto text-4xl ${className}`}
    >
      Why Us
    </h1>
  );
};

export default SectionHeader;
