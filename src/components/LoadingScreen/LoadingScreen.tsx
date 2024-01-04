const LoadingScreen = () => {
  const size = 100;

  return (
    <>
      <div className="border border-purple-500 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4 items-center justify-center">
          <div
            style={{ width: `${size}px`, height: `${size}px` }}
            className="animate-spin rounded-full border-t-4 border-purple-300 border-b-4 border-purple-500"
          ></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-3 bg-purple-500 rounded w-1/2"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-purple-500 rounded col-span-1"></div>
                <div className="h-3 bg-purple-500 rounded col-span-2"></div>
              </div>
              <div className="h-3 bg-purple-500 rounded w-3/4"></div>
              <div className="h-3 bg-purple-500 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
