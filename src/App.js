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
  const cartTotal = currentSale.reduce(
    (acumulador, product) => acumulador + product.price*product.amount,
    0
  );
  const Food = () =>
    filteredProducts.filter((product) => product.category === "Sanduíches");
  const Drink = () =>
    filteredProducts.filter((product) => product.category === "Bebidas");

  function filtered() {
    return InputValue.split("").length < 1
      ? setFilteredProducts(Products)
      : setFilteredProducts(
          Products.filter((product) =>
            product.name.toLowerCase().includes(InputValue.toLowerCase())
          )
        );
  }

  function addCart(product) {
    const newProduct = {
      amount: 1,
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
    };
    const someProduct = {
      amount: product.amount+1,
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
    };
    console.log(product, currentSale, !currentSale.some((item) => item.id === product.id))
    currentSale.length === 0
      ? setCurrentSale([newProduct])
      : !currentSale.some((item) => item.id === product.id)
      ? setCurrentSale([...currentSale, newProduct])
      : setCurrentSale([
          ...currentSale.filter((item) => item.id !== product.id),
          someProduct,
        ]);
  }

  function removeCart(product) {
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
  }

  useEffect(() => {
    axios.get(BASE).then((response) => setFilteredProducts(response.data));
    axios.get(BASE).then((response) => setProducts(response.data));
  }, [InputValue, axios]);

  return (
    <div className="boxMain">
      <Header
        InputValue={InputValue}
        setInputValue={setInputValue}
        filtered={filtered}
      />
      <ProductsList
        Food={Food}
        Drink={Drink}
        addCart={addCart}
        filteredProducts={filteredProducts}
        currentSale={currentSale}
      />
      <Cart
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCurrentSale={setCurrentSale}
        removeCart={removeCart}
      />
    </div>
  );
}
