import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Route from app js passes match, location and history as props
class ShopPage extends Component{
    state = {
        loading : true
    }

    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection("collections");        
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
           //stop this from loading
           this.setState({loading: false});
        })
    }
    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (    
            <div className="shop-page">
               <Route exact path={`${match.path}`} render={(props) => 
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
               }/>       
               <Route path={`${match.path}/:collectionId`} render={(props) => 
                <CollectionPageWithSpinner isLoading={loading} {...props} />
               }/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
  updateCollections : collectionMap => 
  dispatch(updateCollections(collectionMap))
});
export default connect(
    null, mapDispatchToProps
)(ShopPage);