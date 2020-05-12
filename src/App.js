import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signInsignUp/signinsignup.component';



function App() {
  return (
    <div>
      <Header />
      
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInSignUp}/>
    </div>
  );
}

export default App;
