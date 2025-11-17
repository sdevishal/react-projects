const Loader = ({ loadingMsg }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
      <p className="text-gray-700 dark:text-gray-300 text-base font-medium">
        {loadingMsg}
      </p>
    </div>
  );
};

export default Loader;
