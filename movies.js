import axios from 'axios/dist/axios.js';
import React, {useEffect, useState} from 'react';

/* First API: IMDB */
/* Response Obejct: id, title, year, length, rating, rating_votes, poster, plot, trailer, cast */
function MovieSetUp() {
    const [movieList, setMovie] = useState([]);
    const [query, setQuery] = useState(["The Truman Show"]);

    const options = {
        headers: {
            'x-rapidapi-key': '5c7231e0c7msh9e30e20b45a9401p16e520jsndf3b16c2b1c1',
            'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
    };


    useEffect(() => {
        axios
            .get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' + query, options)
            .then(response => {
                setMovie(response.data);
            });
    }, [query]);

   let actorsToRender = [];

   if(movieList.cast) {
       actorsToRender = movieList.cast.map(e => {return <li>{e.actor}</li>}) 
   } else {
       actorsToRender = "Loading...";
   }

    return(

        <div className="MovieBox">
            
            <h3>Search for a movie!</h3>
            <input id="movie" type="textinput"/>
            <button onClick={() => {
                setQuery(document.querySelector("#movie").value);
            }}>Search</button>

            <br></br>
            <br></br>
           
            <h3>Title: {movieList.title} </h3>
            <img src={movieList.poster} alt="Movie Poster" width="200" height="300"/>
            <h5>Year: {movieList.year}</h5>
            <h5>Length: {movieList.length}</h5>
            <h5>Rating: {movieList.rating}</h5>
            <p><b>Plot:</b> {movieList.plot}</p>
            <h4>Cast:</h4>
            
            <ul>
                {
                    actorsToRender
                }
            </ul>
            
        </div>
    )
}

export default MovieSetUp;