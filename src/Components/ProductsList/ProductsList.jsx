import {
  ProductsListMain,
  ProductsProductBox,
  ProductsDetails,
  ProductsSummary,
} from "./style.jsx";
import Product from "../Product/Product.jsx";
import BurguerIcon from "../../Assets/Images/hamburger.png";
import DrinkIcon from "../../Assets/Images/bebidas.png";

export default function ProductsList({ Food, Drink }) {
  return (
    <ProductsListMain>
      {Food().length > 0 && (
        <ProductsProductBox>
          <img src={BurguerIcon} alt="Comidas" className="sectionProductsIcon" />
          <ProductsDetails>
            <ProductsSummary>Lanches</ProductsSummary>
            {Food().map((product) => {
              return <Product product={product} />;
            })}
          </ProductsDetails>
        </ProductsProductBox>
      )}
      {Drink().length > 0 && (
        <ProductsProductBox>
          <img src={DrinkIcon} alt="Bebida" className="sectionProductsIcon" />
          <ProductsDetails>
            <ProductsSummary>Bebidas</ProductsSummary>
            {Drink().length > 0 &&
              Drink().map((product) => {
                return <Product product={product} />;
              })}
          </ProductsDetails>
        </ProductsProductBox>
      )}
    </ProductsListMain>
  );
}
