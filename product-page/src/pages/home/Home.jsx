import { useEffect } from "react";
import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";

const Home = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return (
      <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>Loading...</h1>
    );
  if (error)
    return (
      <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>
        {error || "|| There is somethimmng wrong!"}
      </h1>
    );

  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        {items?.map((product) => (
          <div key={product.id} className={style.productCard}>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            {product.discountPercentage > 0 && (
              <span>Discount: {product.discountPercentage}% off</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
