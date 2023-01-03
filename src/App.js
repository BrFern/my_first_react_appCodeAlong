import React from 'react';
import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';


//API Key: 468eaee9

const API_URL ='http://www.omdbapi.com?apikey=468eaee9'

const movie1 = 
    {
            "Title": "The Lord of the Rings: The Fellowship of the Ring",
            "Year": "2001",
            "imdbID": "tt0120737",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        
    }
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }  

    useEffect(() => {
        searchMovies('Lord of the Rings');
    }, []);

    return (
        <div className ="app">
            <h1>MovieLand</h1>
            <div className ="search"> <input 
            placeholder= "Search for movies"
            value="Superman"
            onChange={() => {}}
            />
            <img 
            src={SearchIcon}
            alt="search"
            onClick = {() => {}}
            />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https//via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>
                            {movie1.Type}
                        </span>
                        <h3>{movie1.Title} </h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;