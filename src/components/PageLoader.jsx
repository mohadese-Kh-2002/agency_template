
const PageLoader = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-(--primary)/10
        backdrop-blur-md z-50"
    >
      <div className="w-12 md:w-20 border-8 md:border-12 border-(--primary) border-t-transparent rounded-full animate-spin aspect-square"></div>
    </div>
  );
};

export default PageLoader;
