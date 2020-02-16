import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div> 
);

const NotFOund = ()=> (<div>
  <h1>404 - not found</h1>
</div>);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    //if user attempted auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user logged in successfully
      if (userAuth){
        //get user data and save if the user is not saved
        //this will also create a on snapshot event on the returned userRef

        const userRef = await createUserProfileDocument(userAuth);

        //if the user snapshot is requested
       userRef.onSnapshot(snapshot => {
         //log the user in, change the state
          setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()            
          });  
          // console.log(this.state);        
        });
      }
      console.log(userAuth);
      // set 
      setCurrentUser(userAuth);      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header />      
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />        
          <Route path='/shop' component={ShopPage} />        
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage/>)}  />        
          <Route component={NotFOund}/>
        </Switch>
      </div>    
    );
  }
 
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

//we dont need mapstatetoprops because it doesnt need to read anything from the state
// we need dispatch of setCurrentUser from user.action.js
export default connect(mapStateToProps,mapDispatchToProps)(App);
