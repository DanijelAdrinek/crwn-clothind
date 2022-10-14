import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});

    useEffect(() => {
            async function getCategoriesData() {
                const categoriesData = await getCategoriesAndDocuments('categories');
                setCategoriesMap(categoriesData);
            };

            getCategoriesData();
        }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
    );
}