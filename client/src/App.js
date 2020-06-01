import React, {useEffect} from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signInsignUp/signinsignup.component';
import {connect} from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.actions'



const App = ({checkUserSession, currentUser}) => {

  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         });
    //       });
    //     }
    //   setCurrentUser(userAuth);
    // });
  



  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => currentUser ? 
        (<Redirect to='/'/>) : (<SignInSignUp/>)} />
      </Switch>
    </div>
  );
  
  
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
 
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
