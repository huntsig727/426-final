import React from 'react';
import fire from './config/fire';

class Login extends React.Component {

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Logged In");
            })
            .catch((err) => {
                console.log("Error" + err.toString());
            })
    }

    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Signed Up");
            })
            .catch((err) => {
                console.log("Error" + err.toString());
            })

    }

    render () {
        return (
            <div className="LogIn">
                <h2>Log In or Sign Up</h2>
                <div>
                    <div><b>Email</b></div>
                    <br></br>
                    <input id="email" placeholder="Enter Email..." type="text"/>
                    
                </div>
                <br></br>
                <div>
                    <div><b>Password</b></div>
                    <br></br>
                    <input id="password" placeholder="Enter Password..." type="text"/>
                </div>
                <br></br>
                <button style={{margin: '10px'}} onClick={this.login}>Login</button>
                <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
                
            </div>
        )
    }
}

export default Login;

