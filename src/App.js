import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import fire from './config/fire';


//Initializing context api to globally manage authentication
export const AuthContext = React.createContext();

//Getting rid of those stupid warnings from Material UI
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});


class App extends Component {
  constructor(props){
    super(props);
    
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
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <AuthContext.Provider value={this.state.user}>
            <div className="App">
              <NavBar />
              <div>
                <Route exact path="/"  render={() => (
                    this.state.user ? (
                      <Redirect to="/dashboard"/>
                    ) : (
                      <Home />
                    )
                  )} />
                <Route exact path="/signin" render={() => (
                    this.state.user ? (
                      <Redirect to="/dashboard"/>
                    ) : (
                      <SignIn />
                    )
                  )} />
                <Route exact path="/signup" render={() => (
                    this.state.user ? (
                      <Redirect to="/dashboard"/>
                    ) : (
                      <SignUp />
                    )
                  )} />
                <Route exact path="/dashboard" render={() => (
                    this.state.user ? (
                      <Dashboard />
                    ) : (
                      <Redirect to="/signin"/> 
                    )
                  )} />
              </div>
            </div>
          </AuthContext.Provider>
        </Router>
      </MuiThemeProvider>
      
    )};
}

export default App;
