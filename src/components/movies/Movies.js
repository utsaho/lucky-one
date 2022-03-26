import React, { useEffect, useState } from 'react';
import MovieCart from '../movie-cart/MovieCart';
import Movie from '../movie/Movie';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setMovies(data))
    }, []);

    const addToCart = (id) => {
        console.log(id);
    }

    return (
        <div className='movies'>
            <div className='movie-container'>
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id} addToCart={addToCart}></Movie>)
                }
            </div>
            <div className='movieCart'>
                <MovieCart></MovieCart>
            </div>
        </div>
    );
};

export default Movies;