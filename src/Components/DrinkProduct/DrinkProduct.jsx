import { ProductCard, ProductImg, ProductName, ProductCategory, ProductPrice, ProductButton } from "./style";


export default function DrinkProduct ({product}) {
    return (
        <ProductCard key={product.id}>
            <ProductImg src={product.img}/>
            <ProductName>{product.name}</ProductName>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductButton/>
        </ProductCard>
    )
}