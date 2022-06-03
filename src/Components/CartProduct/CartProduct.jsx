import {CartProductMain, CartProductImage, CartProductTexts, CartProductName, CartProductCategory, CartProductBtnRemove} from "./style.jsx"

export default function CartProduct ({product, removeCart}) {

    return (
        <CartProductMain>
            <CartProductImage image={product.img}/>
            <CartProductTexts>
                <CartProductName>{product.name}</CartProductName>
                <CartProductCategory>{product.category}</CartProductCategory>
            </CartProductTexts>
            <CartProductBtnRemove onClick={() => removeCart(product)}>Remover</CartProductBtnRemove>
        </CartProductMain>
    )

}