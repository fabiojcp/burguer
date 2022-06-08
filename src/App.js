import "./Assets/CSS/reset.css";
import "./Assets/CSS/style.css";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import ProductsList from "./Components/ProductsList/ProductsList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const axios = require("axios").default;
  const BASE = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";
  const [Products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [InputValue, setInputValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const cartTotal = currentSale.reduce(
    (acumulador, product) => acumulador + product.price * product.amount,
    0
  );
  const Food = () =>
    filteredProducts.filter((product) => product.category === "Sanduíches");
  const Drink = () =>
    filteredProducts.filter((product) => product.category === "Bebidas");
    const oi = "oi"
  function replaceSpecialChars(str) {
    str = str.replace(/[ÀÁÂÃÄÅ]/g, "A");
    str = str.replace(/[àáâãäå]/g, "a");
    str = str.replace(/[ÈÉÊË]/g, "E");
    str = str.replace(/[èéêë]/g, "e");
    str = str.replace(/[ÍÌÎ]/g, "I");
    str = str.replace(/[íìî]/g, "i");
    str = str.replace(/[ÒÓÔÕÖ]/g, "O");
    str = str.replace(/[òóôõö]/g, "o");
    str = str.replace(/[ÙÚÛ]/g, "U");
    str = str.replace(/[úùû]/g, "u");
    str = str.replace(/[Ç]/g, "C");
    str = str.replace(/[ç]/g, "c");
    str = str.replace(/[ÍÌÎ]/g, "I");
    str = str.replace(/[íìî]/g, "i");

    return str.replace(/[^a-z0-9]/gi, "");
  }

  function filtered() {
    return InputValue.split("").length < 1
      ? setFilteredProducts(Products)
      : Products.some(
          (product) =>
            ((replaceSpecialChars(product.name.toLowerCase()).includes(
              replaceSpecialChars(InputValue.toLowerCase())
            )) || (replaceSpecialChars(product.category.toLowerCase()).includes(
              replaceSpecialChars(InputValue.toLowerCase())
            ))) === true
        )
      ? setFilteredProducts(
          Products.filter((product) =>
            (replaceSpecialChars(product.name.toLowerCase()).includes(
              replaceSpecialChars(InputValue.toLowerCase())
            ) || replaceSpecialChars(product.category.toLowerCase()).includes(
              replaceSpecialChars(InputValue.toLowerCase())
            ))
          )
        )
      : toast.error("Não foram encontrados produtos", {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
      });
  }

  function addCart(product) {
    currentSale.length === 0
      ? setCurrentSale([(product = { ...product, amount: 1 })])
      : !currentSale.some((item) => item.id === product.id)
      ? setCurrentSale([...currentSale, (product = { ...product, amount: 1 })])
      : setCurrentSale([
          ...currentSale.map((item) => {
            if (item.id === product.id) {
              return { ...item, amount: item.amount + 1 };
            } else {
              return { ...item };
            }
          }),
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
      <ToastContainer/>
    </div>
  );
}
