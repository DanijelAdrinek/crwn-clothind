import "./checkout-header.styles.scss";

import CheckoutHeaderItem from "../checkout-header-item/checkout-header-item.component";

const CheckoutHeader = () => {

    return (
        <div className="checkout-header">
            <CheckoutHeaderItem name="Product" />
            <CheckoutHeaderItem name="Description" />
            <CheckoutHeaderItem name="Quantity" />
            <CheckoutHeaderItem name="Price" />
            <CheckoutHeaderItem name="Remove" />
        </div>
    )

}

export default CheckoutHeader;