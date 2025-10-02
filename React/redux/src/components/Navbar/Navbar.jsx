import React from 'react'
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/basket/basketSlice";
function Navbar() {
 const products = useSelector(selectAllProducts);
  return (
    <div>
      <h2>🛒 Savatcha ({products.length} ta)</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title} - {item.price}$</li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
