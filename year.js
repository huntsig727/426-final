import axios from 'axios/dist/axios.js';
import React, {useEffect, useState} from 'react';

/* Third API: Year Facts. Users can look up a fun fact about a year a movie was released. */
function Year() {
    const [year, setYear] = useState([1998]);
    const [fact, setFact] = useState([]);

    const options = {
        headers: {
            'x-rapidapi-key': '5c7231e0c7msh9e30e20b45a9401p16e520jsndf3b16c2b1c1',
            'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
        }
    };


    useEffect(() => {
        axios
            .get('https://numbersapi.p.rapidapi.com/' + year + '/year', options)
            .then(response => {
                setFact(response.data);
            });
    }, [year]);

    return(
        <div className="Coin">
            <h2>Year Fun Facts</h2>
             <h3>Enter the year this movie was released.</h3>
            <input id="year" type="textinput"/>
            <button onClick={() => {
                setYear(document.querySelector("#year").value);
            }}>Search</button> 
        
            <h3>Here's a fun fact about the year this movie was released:</h3>
            <p>{fact}</p>
            
        </div> 
    )
}

export default Year;