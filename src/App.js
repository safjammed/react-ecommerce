import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div> 
);

const NotFOund = ()=> (<div>
  <h1>404 - not found</h1>
</div>);

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    //if user attempted auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user logged in
      if (userAuth){
        //get user data and save if the user is not saved
        //this will also create a on snapshot event on the returned userRef

        const userRef = await createUserProfileDocument(userAuth);

        //if the user snapshot is requested
       userRef.onSnapshot(snapshot => {
         //log the user in, change the state
          this.setState({
            currentUser:{
              id : snapshot.id,
              ...snapshot.data()
            }
          });  
          // console.log(this.state);        
        });
      }
      this.setState({currentUser:userAuth});      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser}/>      
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />        
          <Route path='/shop' component={ShopPage} />        
          <Route path='/signin' component={SignInSignUpPage} />        
          <Route component={NotFOund}/>
        </Switch>
      </div>    
    );
  }
 
}

export default App;
