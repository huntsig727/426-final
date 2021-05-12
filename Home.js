// import axios from 'axios/dist/axios.js';
import React from 'react';
import fire from './config/fire';
import CoinComponent from './coinfetch.js';
import MovieSetUp from './movies.js';
import Year from './year.js';
import Love from './love.js'
import './App.css';

class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    toggle() {
        var element = document.body;
        element.classList.toggle("darkMode");
    }

    render () {
       
        return (
            
            <div>
                <h2>Home</h2>

                <button onClick={this.toggle}>Select Color Mode</button>
                <br></br>
                <br></br>
                <div>
                    <button className="LogOut" onClick={this.logout}>Logout</button>
                    
                </div>
                
        
                <div>
                    <div><MovieSetUp/></div>
                    <div><CoinComponent/></div>
                    <div><Year/></div>
                    <div><Love/></div>
                </div>
            </div>
        )
    }
}


export default Home;