import React, { useEffect, useState } from 'react';
import Movie from '../movie/Movie';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setMovies(data))
    }, []);
    return (
        <div className='movies'>
            <div className='movie-container'>
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id}></Movie>)
                }
            </div>
            <div className='movieCart'>
                Movies cart goes here
            </div>
        </div>
    );
};

export default Movies;