import CartProduct from "../CartProduct/CartProduct";
import {
  CartMain,
  CartTitle,
  CartProducts,
  CartTotalSale,
  CartRemoveAll,
} from "./style";
import { EmptyCart, EmptyCartTitle, EmptyCartSubTitle } from "./styleEmpty";
import { OpenCart, CloseCart } from "./styleBtn";
import CartIco from "../../Assets/Icon/Cart.png";
import Close from "../../Assets/Icon/Close.png";
import { useState } from "react";
import React from "react";

export default function Cart({ currentSale, cartTotal }) {
  const [CartOpen, setCartOpen] = useState("none");
  const [Inverted, setInverted] = useState("flex")
  
  return (
    <>
      <CartMain id={CartOpen}>
        <CartTitle>Carrinho de compras</CartTitle>
        {currentSale.length === 0 ? (
          <EmptyCart>
            <CloseCart Close={Close} onClick={() => (setCartOpen("none"), setInverted("flex"))} />
            <EmptyCartTitle>Sua sacola está vazia</EmptyCartTitle>
            <EmptyCartSubTitle>Adicione itens</EmptyCartSubTitle>
          </EmptyCart>
        ) : (
          <CartProducts>
            <CloseCart Close={Close} onClick={() => (setCartOpen("none"), setInverted("flex"))} />
            {currentSale.map((product, index) => {
              return <CartProduct index={index} product={product} />;
            })}
            <CartTotalSale>R$ {cartTotal.toFixed(2).toString().replace(".",",")}</CartTotalSale>
            <CartRemoveAll>Remover todos</CartRemoveAll>
          </CartProducts>
        )}
      </CartMain>
      <OpenCart CartIco={CartIco} onClick={() => (setCartOpen("flex"), setInverted("none"))} id={Inverted} />
    </>
  );
}
