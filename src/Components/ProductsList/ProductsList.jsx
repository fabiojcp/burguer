import { ProductsListMain } from "./style.jsx";
import Product from "../Product/Product.jsx";

export default function ProductsList({Products, filteredProducts }) {

  return (
    <ProductsListMain>
      {filteredProducts.map((product) => {return <Product product={product}/>})} 
      
    </ProductsListMain>
  );
}
