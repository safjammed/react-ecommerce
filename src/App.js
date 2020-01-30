import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div> 
);

const NotFOund = ()=> (<div>
  <h1>404 - not found</h1>
</div>);

function App() {
  return (
    <div >
      <Header/>      
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

export default App;
