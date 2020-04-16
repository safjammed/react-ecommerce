import { createSelector } from "reselect";


const selectShop = state =>  state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// FInd collection.id matching the url parameter of our collection id map, below is needed for array type( not normalized) shop data if collection id is extracted instead pf routename
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);