const Container = ({ className, children }) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1080px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
