import { ProductsListMain } from "./style.jsx";
import FoodsProduct from "../FoodsProduct/FoodProduct.jsx";
import DrinkProduct from "../DrinkProduct/DrinkProduct.jsx";
import { useState, useEffect } from "react";
import BurguerIcon from "../../Assets/Images/hamburger.png";
import DrinkIcon from "../../Assets/Images/bebidas.png"

export default function ProductsList({ Food, Drink }) {
  return (
    <ProductsListMain>
      {Food().length > 0 && (
        <div>
        <img src={BurguerIcon} className="ai" />
        <details>
          {Food().map((product) => {
            return <FoodsProduct product={product} />;
          })}
        </details>
        </div>
      )}
      {Drink().length > 0 && (
        <div>
        <img src={DrinkIcon} className="ai" />
        <details>
          {Drink().length > 0 &&
            Drink().map((product) => {
              return <FoodsProduct product={product} />;
            })}
        </details>
        </div>
      )}
    </ProductsListMain>
  );
}
