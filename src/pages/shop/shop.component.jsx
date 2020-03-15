import React from 'react';
import { Route } from "react-router-dom";

// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


// Route from app js passes match, location and history as props
const ShopPage = ({match}) =>(    
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionsOverview}/>       
       <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);
export default (ShopPage);

/*import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';


const ShopPage = ({collections}) => (
    <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
});

export default connect(mapStateToProps)(ShopPage);*/