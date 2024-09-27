import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
    [selectCategoryReducer], 
    (category) => category.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (category) => category.isLoading
);

