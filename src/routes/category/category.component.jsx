import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useQuery, gql } from "@apollo/client";

import { CategoryTitle, CategoryContainer } from "./category.styles.jsx";

const Category = () => {

    const { category } = useParams();

    const [products, setProducts] = useState([])

    const GET_CATEGORY = gql`
        query($title: String!){
            getCollectionsByTitle(title: $title) {
            id,
            title,
            items {
              id,
              name,
              price,
              imageUrl
            }
        }
    }
    `;

    const {loading, error, data } = useQuery(GET_CATEGORY, {
        variables: {
            title: category
        }
    })

    useEffect(() => {

        if(data) {
            const {
                getCollectionsByTitle: { items }
            } = data;

            setProducts(items);
        }

    }, [category, data])

    return (
        <>    
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map(product => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </>
    )
}

export default Category;