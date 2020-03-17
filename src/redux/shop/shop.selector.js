import { createSelector } from "reselect";


const selectShop = state =>  state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

// FInd collection.id matching the url parameter of our collection id map, below is needed for array type( not normalized) shop data if collection id is extracted instead pf routename
/* const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
} */
// This can bea easily achieved by routeName Param on shop data
// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     collections => 
//         collections.find(
//             collection => collection.routeName === collectionUrlParam
//     )
// );
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);