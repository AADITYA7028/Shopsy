import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import ProductCategory from "../product-category/product-category.component";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(fetchCategoriesStart());
    }, [])

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<ProductCategory/>}/>
        </Routes>
    )
}

export default Shop;