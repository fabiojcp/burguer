import "./Assets/CSS/reset.css";
import "./Assets/CSS/style.css";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import ProductsList from "./Components/ProductsList/ProductsList";

export default function App() {
  const axios = require("axios").default;
  const BASE = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";
  const [Products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [InputValue, setInputValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function filter () {
    return InputValue.split('').length < 1
      ? setFilteredProducts(Products)
      : setFilteredProducts(Products.filter((product) =>
          product.name.toLowerCase().includes(InputValue.toLowerCase())
        ));
  }

  useEffect(() => {
    axios.get(BASE).then((response) => setFilteredProducts(response.data));
    axios.get(BASE).then((response) => setProducts(response.data));
  }, [InputValue, axios]);

  return (
    <div className="boxMain">
      <Header InputValue={InputValue} setInputValue={setInputValue} filter={filter}/>
      <ProductsList Products={Products} filteredProducts={filteredProducts} />
      <Cart />
    </div>
  );
}
