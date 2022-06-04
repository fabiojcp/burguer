import {
  ProductCard,
  ProductImg,
  ProductName,
  ProductCategory,
  ProductPrice,
  ProductButton,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

export default function Product({
  product,
  addCart,
  currentSale,
  filteredProducts,
}) {
  const [deviceSize, changeDeviceSize] = useState(
    window.visualViewport.width < window.visualViewport.height
  );

  useEffect(() => {
    const resizeW = () =>
      changeDeviceSize(
        window.visualViewport.width < window.visualViewport.height
      );

    window.addEventListener("resize", resizeW); // Update the width on resize
  });
  const add = () =>
    toast.success("Produto adicionado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <ProductCard key={product.id}>
      <ProductImg image={product.img} />
      <ProductName>{product.name}</ProductName>
      <ProductCategory>{product.category}</ProductCategory>
      <ProductPrice>
        R$ {product.price.toFixed(2).toString().replace(".", ",")}
      </ProductPrice>
      <ProductButton
        onClick={() =>
          (currentSale[0] === undefined)
          ? addCart(product)
          : currentSale.some((item) => product.id === item.id)
            ? (addCart(currentSale.find((item) => item.id === product.id)))
            : (addCart(product))
            
        }
      >
        Adicionar
      </ProductButton>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={deviceSize && { transform: "scale(0.8)" }}
      />
    </ProductCard>
  );
}
