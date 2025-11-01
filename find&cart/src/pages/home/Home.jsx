import { useEffect, useState } from "react";
import style from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        {data?.map((product) => (
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
