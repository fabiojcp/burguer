import { ProductCard, ProductImg, ProductName, ProductCategory, ProductPrice, ProductButton } from "./style";


export default function Product ({product, index, addCart}) {
    return (
        <ProductCard key={product.id}>
            <ProductImg image={product.img}/>
            <ProductName>{product.name}</ProductName>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductPrice>R$ {product.price.toFixed(2).toString().replace(".",",")}</ProductPrice>
            <ProductButton onClick={() => addCart(product)}>Adicionar</ProductButton>
        </ProductCard>
    )
}