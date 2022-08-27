import { HeaderBlock } from "./checkout-header-item.styles.jsx";

const CheckoutHeaderItem = ({name}) => {
    return (
        <HeaderBlock>
            <span>{name}</span>
        </HeaderBlock>    
    )
}

export default CheckoutHeaderItem;