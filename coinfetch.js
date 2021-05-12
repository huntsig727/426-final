import axios from 'axios/dist/axios.js';
import React, {useEffect, useState} from 'react';

/* Third API: Coin Flip. Used to help users flip a coin on whether they want to watch a certain movie. */
function CoinComponent() { 
    const [coin, setCoin] = useState([]);
    const [message, setMessage] = useState([]);

    const options = {
        headers: {
             'x-rapidapi-key': '5c7231e0c7msh9e30e20b45a9401p16e520jsndf3b16c2b1c1',
             'x-rapidapi-host': 'coin-flip1.p.rapidapi.com'
        }
    };
    
    useEffect(() => { 
        axios
            .get('https://coin-flip1.p.rapidapi.com/headstails', options)
            .then(response => {
                setCoin(response.data["outcome"]);
            });
        }, [message]);

    

    return (
        <div className="Coin">
            <h2>Coin Flip</h2>
            <h3>Struggling to pick a movie? Flip a coin to make the decision!</h3>
            <h4>Enter 'Heads' or 'Tails' and let the coin decide.</h4>
            <input id="coinflip" type="text"/>
            <button onClick={() => {
                let userguess = document.querySelector("#coinflip").value;

                if (coin.toString().toLowerCase() == userguess.toLowerCase()) {
                    setMessage("Looks like you are watching this movie! Enjoy!");
                } else {
                    setMessage("Flip again or pick another movie!");
                }
            }}>Flip It!</button> 
            <h4>{message}</h4>
        </div>
    )
}

export default CoinComponent;
