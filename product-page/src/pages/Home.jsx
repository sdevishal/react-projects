import { useGetProductsQuery } from "../api/productsApi";

const Home = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();

  // 🌀 Loading State
  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-gray-700 dark:text-gray-300 text-base font-medium">
          Loading products...
        </p>
      </div>
    );

  // ⚠️ Error State
  if (isError)
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <p className="text-red-500 text-base font-medium">
          {error?.error || "Oops! Something went wrong."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300 cursor-pointer"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="p-4 bg-color">
      {/* ---------- PRODUCT GRID ---------- */}
      {isSuccess && (
        <div
          className="max-w-6xl mx-auto
                   grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                   gap-4"
        >
          {data?.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden p-4 flex flex-col"
            >
              {/* 🖼️ Product Image */}
              <div className="w-full h-35 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-35 h-30 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 🧾 Product Details */}
              <div className="mt-3 flex flex-col grow">
                <h2 className="text-lg font-semibold leading-tight text-gray-800 dark:text-gray-100 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 capitalize">
                  {product.category}
                </p>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </span>
                  <span className="text-sm text-yellow-500 font-medium">
                    ⭐ {product.rating.rate}
                  </span>
                </div>

                {product.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                    {product.description}
                  </p>
                )}
              </div>

              {/* 🛒 Button */}
              <button className="mt-4 w-full bg-blue-600 text-white py-2 cursor-pointer rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
