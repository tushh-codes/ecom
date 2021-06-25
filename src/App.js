import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { connect } from 'react-redux';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignupPage from './pages/sign-in and sign-up/sign-in and sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCuurentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCuurentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCuurentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCuurentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCuurentUser: (user) => dispatch(setCuurentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
