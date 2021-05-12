import axios from 'axios/dist/axios.js';
import React, {useEffect, useState} from 'react';

/* Fourth API: Love Calculator. Users can calculate their chances at love with a movie's actors. */
function Love() {
    const [love, setLove] = useState([]);
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);

    const [movieList, setMovie] = useState([]);
    const [query, setQuery] = useState(["The Truman Show"]);

    const options = {
        headers: {
            'x-rapidapi-key': '5c7231e0c7msh9e30e20b45a9401p16e520jsndf3b16c2b1c1',
            'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
    };  

    let config = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: name, sname: love},
        headers: {
            'x-rapidapi-key': '5c7231e0c7msh9e30e20b45a9401p16e520jsndf3b16c2b1c1',
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
    }

    useEffect(() => {
        axios(config)
            .then(response => {
                setData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        axios
            .get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' + query, options)
            .then(response => {
                setMovie(response.data);
            });
    }, [name, love, query]);


    let actorsToRender = [];

    if(movieList.cast) {
        actorsToRender.length = 0;
        movieList.cast.map(e => actorsToRender.push(e.actor));

        var list = document.getElementById('actors');
        list.innerHTML = '';
    
        actorsToRender.forEach(function(item) {
            var option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        }); 
    } 


    return(
        <div className="Coin">

            <datalist id="actors"></datalist>

            <h2>Love Calculator</h2>

            <h3>Enter a movie.</h3>
            <input id="smovie" type="textinput"/>
            <button onClick={() => {
                setQuery(document.querySelector("#smovie").value);
            }}>Enter</button>

            <h3>Enter your name here:</h3>
            <input id="fname" type="textinput"/>

            <h3>Enter an actor's name here:</h3>
            <input list="actors" id="sname" type="textinput"/>

            <br></br>
            <br></br>

            <button onClick={() => {
                setName(document.querySelector("#fname").value.toString());
                setLove(document.querySelector("#sname").value.toString());
            }}>Calculate Love!</button> 
        
            <h4>Percentage: {data.percentage}% </h4>
            <h4>Results: {data.result} </h4>
            
        </div> 
    )
}

export default Love;