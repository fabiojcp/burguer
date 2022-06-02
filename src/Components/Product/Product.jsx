import { ProductCard, ProductImg, ProductName, ProductCategory, ProductPrice, ProductButton } from "./style";


export default function Product ({product}) {
    return (
        <ProductCard key={product.id}>
            <ProductImg image={product.img}/>
            <ProductName>{product.name}</ProductName>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductPrice>R$ {product.price.toFixed(2).toString().replace(".",",")}</ProductPrice>
            <ProductButton>Adicionar</ProductButton>
        </ProductCard>
    )
}