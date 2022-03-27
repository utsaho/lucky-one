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
        if (cart.length >= 4) {
            alert('You cann\'t add more then 4 movies');
        }
        else {
            const exist = cart.find(singleMovie => singleMovie.id === movie.id);
            if (!exist) {
                const newCart = [...cart, movie];
                setCart(newCart);
            }
        }
    }

    const deleteFromCart = (movie) => {
        const exist = cart.find(singleMovie => singleMovie.id === movie.id);
        if (exist) {
            const newCart = [...cart];
            newCart.splice(cart.indexOf(exist), 1);
            setCart(newCart);
        }
    }
    const deleteAll = () => {
        // cart.length = 0;
        setCart([])
    }
    const chooseOne = () => {
        if (cart.length === 0) {
            alert('Please select at least one movie');
        }
        else {
            const choosenIndex = parseInt(Math.random() * cart.length);
            console.log(cart[choosenIndex].name);
            alert('I recommend you to watch: ' + cart[choosenIndex].name);
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
                <h2>Selected Movies:</h2> <hr />
                {
                    cart.map(movie => <MovieCart movie={movie} key={movie.id} deleteFromCart={deleteFromCart}></MovieCart>)
                }
                <button className='choose-btn' onClick={() => chooseOne()}>CHOOSE 1 FOR ME</button>
                <button className='choose-btn' onClick={() => deleteAll()}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Movies;