import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/basket/basketSlice";

function ProductList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Fake API dan mahsulotlarni olish
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>📦 Mahsulotlar</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
            <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
            <h4>{product.title}</h4>
            <p>{product.price} $</p>
            <button onClick={() => dispatch(addToBasket(product))}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
