import {
  ProductsListMain,
  ProductsProductBox,
  ProductsDetails,
  ProductsSummary,
  ProductsListError,
} from "./style.jsx";
import Product from "../Product/Product.jsx";
import BurguerIcon from "../../Assets/Images/hamburger.png";
import DrinkIcon from "../../Assets/Images/bebidas.png";
import React, { useState } from "react";
import { useEffect } from "react";

export default function ProductsList({
  Food,
  Drink,
  addCart,
  filteredProducts,
  currentSale,
}) {
  const [deviceSize, changeDeviceSize] = useState(
    window.visualViewport.width > window.visualViewport.height
  );

  useEffect(() => {
    const resizeW = () =>
      changeDeviceSize(
        window.visualViewport.width > window.visualViewport.height
      );

    window.addEventListener("resize", resizeW); // Update the width on resize
  });

  return (
    <ProductsListMain>
      {deviceSize ? (
        <>
          <ProductsProductBox>
            {filteredProducts.length > 0 
            ? filteredProducts.map((product, index) => {
              return (
                <Product
                  product={product}
                  key={index}
                  addCart={addCart}
                  currentSale={currentSale}
                  filteredProducts={filteredProducts}
                />
              );
            })
          : <ProductsListError>Não achamos produtos com esta busca</ProductsListError>
          }
          </ProductsProductBox>
        </>
      ) : 
        <>
          {filteredProducts.length > 0 
          ? <>
          {Food().length > 0 && (
            <ProductsProductBox>
              <img src={BurguerIcon} alt="Comidas" className="sectionProductsIcon"/>
              <ProductsDetails>
                <ProductsSummary>Lanches</ProductsSummary>
                {Food().map((product, index) => {return ( <Product product={product} key={index} addCart={addCart} currentSale={currentSale} filteredProducts={filteredProducts} />)})}
              </ProductsDetails>
            </ProductsProductBox>
          )}
          {Drink().length > 0 && (
            <ProductsProductBox> <img src={DrinkIcon} alt="Bebida" className="sectionProductsIcon" />
              <ProductsDetails>
                <ProductsSummary>Bebidas</ProductsSummary>
                {Drink().map((product, index) => {return (<Product product={product} key={index} addCart={addCart} currentSale={currentSale} filteredProducts={filteredProducts}/>)})}
                  </ProductsDetails>
            </ProductsProductBox>
            )}
                  </>
            : <ProductsListError>Não achamos <br/>produtos com esta busca</ProductsListError>
                }
        </>
      }
    </ProductsListMain>
  );
}
