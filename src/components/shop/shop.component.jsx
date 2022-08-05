import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

import ProductCard from "../product-card/product-card.component";

const Shop = () => {

    const { products, setProducts } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) => {
                return <ProductCard key={product.key} product={product} />
            })}
        </div>
    );
}

export default Shop;