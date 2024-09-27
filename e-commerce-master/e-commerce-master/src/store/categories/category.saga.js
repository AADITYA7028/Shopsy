import {takeLatest, all, call, put}  from "redux-saga/effects";
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

