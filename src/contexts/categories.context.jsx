import { createContext, useState, useEffect } from "react";

import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query GetCollections{
      collections{
        id,
        title,
        items {
          name,
          price,
          imageUrl
        }
      }
    }
`;

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    // example of variables we get after destructuring useQuery
    const { loading, error, data } = useQuery(GET_CATEGORIES)
    const [ categoriesMap, setCategoriesMap ] = useState({});

    useEffect(() => {
        if(data) {
            const { collections } = data;
            const collecitonsMap = collections.reduce((acc, collection) => {

                const {title, items} = collection;
                acc[title.toLowerCase()] = items;

                return acc
            }, {});

            setCategoriesMap(collecitonsMap); 
        }
    }, [data])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
    );
}