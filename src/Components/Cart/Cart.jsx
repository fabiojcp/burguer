import CartProduct from "../CartProduct/CartProduct";
import {
  CartMain,
  CartTitle,
  CartProducts,
  CartTotalSale,
  CartRemoveAll,
  CartTotalSaleDiv,
  CartTotalSaleText,
  CartProductsDiv,
} from "./style";
import { EmptyCart, EmptyCartTitle, EmptyCartSubTitle } from "./styleEmpty";
import { OpenCart, CloseCart } from "./styleBtn";
import CartIco from "../../Assets/Icon/Cart.png";
import Close from "../../Assets/Icon/Close.png";
import { useState, useEffect } from "react";
import React from "react";

export default function Cart({ currentSale, cartTotal, setCurrentSale, removeCart }) {
  const [CartOpen, setCartOpen] = useState("none");
  const [Inverted, setInverted] = useState("flex");

  const [deviceSize, changeDeviceSize] = useState(window.visualViewport.width < window.visualViewport.height);
  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.visualViewport.width < window.visualViewport.height);

    window.addEventListener("resize", resizeW); // Update the width on resize
  });

  return (
    <>
      <CartMain id={deviceSize && CartOpen}>
      <CloseCart
              Close={Close}
              onClick={() => (setCartOpen("none"), setInverted("flex"))}
            />
        <CartTitle>Carrinho de compras</CartTitle>
        {currentSale.length === 0 ? (
          <EmptyCart>
            
            <EmptyCartTitle>Sua sacola está vazia</EmptyCartTitle>
            <EmptyCartSubTitle>Adicione itens</EmptyCartSubTitle>
          </EmptyCart>
        ) : (
          <CartProducts>
            <CartProductsDiv>
            {currentSale.map((product, index) => {
              return <CartProduct key={index} product={product} removeCart={removeCart} />;
            })}
            </CartProductsDiv>
            <CartTotalSaleDiv>
              <CartTotalSaleText>Total</CartTotalSaleText>
              <CartTotalSale>
                R$ {cartTotal.toFixed(2).toString().replace(".", ",")}
              </CartTotalSale>
            </CartTotalSaleDiv>
            <CartRemoveAll onClick={() => setCurrentSale([])}>Remover todos</CartRemoveAll>
          </CartProducts>
        )}
      </CartMain>
      <OpenCart
        CartIco={CartIco}
        onClick={() => (setCartOpen("flex"), setInverted("none"))}
        id={deviceSize && Inverted}
      />
    </>
  );
}
