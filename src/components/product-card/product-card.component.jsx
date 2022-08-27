import { ProductCardContainer, Image, Footer, Name, Price, ButtonStyled } from "./product-card.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";



const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
      <ProductCardContainer>
        <Image src={imageUrl} alt={name} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <ButtonStyled buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</ButtonStyled>
      </ProductCardContainer>
    );
}

export default ProductCard;