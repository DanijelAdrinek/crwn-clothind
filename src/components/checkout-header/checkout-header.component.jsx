import { CheckoutHeaderStyle } from "./checkout-header.styles.jsx";

import CheckoutHeaderItem from "../checkout-header-item/checkout-header-item.component";

const CheckoutHeader = () => {

    return (
        <CheckoutHeaderStyle>
            <CheckoutHeaderItem name="Product" />
            <CheckoutHeaderItem name="Description" />
            <CheckoutHeaderItem name="Quantity" />
            <CheckoutHeaderItem name="Price" />
            <CheckoutHeaderItem name="Remove" />
        </CheckoutHeaderStyle>
    )

}

export default CheckoutHeader;