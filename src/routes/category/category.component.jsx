import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryTitle, CategoryContainer } from "./category.styles.jsx";

const Category = () => {

    const { category } = useParams();

    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    console.log(categoriesMap);

    return (
        <>    
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map(product => 
                    <ProductCard key={product.id} product={product} />
                )}
            </CategoryContainer>
        </>
    )
}

export default Category;