import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";

const Home = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return <h1 className="text-center my-4 text-lg font-medium">Loading...</h1>;

  if (error)
    return (
      <h1 className="text-center my-4 text-lg font-medium text-red-500">
        {error || "There is something wrong!"}
      </h1>
    );

  return (
    <div className="p-4 bg-color">
      {/* ---------- PRODUCT GRID ---------- */}
      <div
        className="max-w-6xl mx-auto 
                   grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
                   gap-4"
      >
        {items?.map((product) => (
          <div
            key={product.id}
            // 🔹 Product Card`
            className="card p-2"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full border border-gray-300 rounded-md max-h-40 object-cover"
            />
            <h2 className="text-base font-medium mt-2">{product.title}</h2>
            <p className="my-1 text-gray-700 dark:text-gray-200">{product.brand}</p>
            <p className="my-1 text-gray-800 dark:text-gray-200 font-semibold">
              Price: ${product.price}
            </p>
            <p className="my-1 text-gray-700 dark:text-gray-200">Rating: {product.rating}</p>
            {product.discountPercentage > 0 && (
              <span className="text-sm text-green-600 font-medium">
                Discount: {product.discountPercentage}% off
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
