import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import fire from './config/fire';

export const AuthContext = React.createContext();

class App extends Component {
  constructor(props){
    super(props);
    

    //Dont forget to null this later
    this.state = {
      user: null
    }

    this.authListener = this.authListener.bind(this)
  }

  componentDidMount(){
      this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        console.log("I have a user")
        console.log(user)
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
        console.log("I dont have a user")
      }
    })
  }

  render() {
    return (
      <Router>
        <AuthContext.Provider value={this.state.user}>
          <div className="App">
            <NavBar />
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </AuthContext.Provider>
      </Router>
    )};
}

export default App;
