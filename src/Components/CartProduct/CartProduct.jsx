import {CartProductMain, CartProductImage, CartProductTexts, CartProductName, CartProductCategory, CartProductBtnRemove, CartProductAmount} from "./style.jsx"

export default function CartProduct ({product, removeCart}) {

    return (
        <CartProductMain>
            <CartProductImage image={product.img}/>
            <CartProductTexts>
                <CartProductName>{product.name}</CartProductName>
                <CartProductCategory>{product.category}</CartProductCategory>
                <CartProductAmount>Quantidade: {product.amount}</CartProductAmount>
            </CartProductTexts>
            <CartProductBtnRemove onClick={() => removeCart(product)}>Remover</CartProductBtnRemove>
            
        </CartProductMain>
    )

}