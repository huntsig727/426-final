import './App.css';
// import axios from 'axios/dist/axios.js';
import React, {Component} from 'react';
import Home from './Home.js'
import Login from './login.js';
import fire from './config/fire';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({user: null});
      }
    })
  }

 
  render() {
    return (
      <div id="App" className="App">
        <h1>Fun With Films</h1>
          {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
  
    )
  }
  
}

/* Fourth API: Numbers. Tells a fun fact about the year a movie was released. */

export default App;

