import React, { useEffect, useState } from 'react';
import MovieCart from '../movie-cart/MovieCart';
import Movie from '../movie/Movie';
import './Movies.css'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setMovies(data))
    }, []);

    const addToCart = (movie) => {
        const exist = cart.find(singleMovie => singleMovie.id === movie.id);
        if (!exist) {
            const newCart = [...cart, movie];
            setCart(newCart);
        }
        else {
            // console.log(cart.indexOf(exist));
            // console.log(cart);

        }
    }

    const deleteFromCart = (movie) => {
        const exist = cart.find(singleMovie => singleMovie.id === movie.id);
        if (exist) {
            // console.log(movie);
            const newCart = [...cart];
            newCart.splice(cart.indexOf(exist), 1);
            setCart(newCart);
        }
    }

    return (
        <div className='movies'>
            <div className='movie-container'>
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id} addToCart={addToCart}></Movie>)
                }
            </div>
            <div className='movieCart'>
                <h2>Selected Items:</h2> <hr />
                {
                    cart.map(movie => <MovieCart movie={movie} key={movie.id} deleteFromCart={deleteFromCart}></MovieCart>)
                }
            </div>
        </div>
    );
};

export default Movies;