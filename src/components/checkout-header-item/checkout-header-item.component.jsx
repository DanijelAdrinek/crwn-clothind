import "./checkout-header-item.styles.scss";

const CheckoutHeaderItem = ({name}) => {
    return (
        <div className="header-block">
            <span>{name}</span>
        </div>    
    )
}

export default CheckoutHeaderItem;