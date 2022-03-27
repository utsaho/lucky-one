import React from 'react';
import './Movie.css';
const Movie = ({ movie, addToCart }) => {
    // console.log(addToCart);
    return (
        <div className='movie'>
            <img src={movie.img} alt="" />
            <div className='movie-details'>
                <h4 className='movie-name'>Name: {movie.name}</h4>
                <p><strong>ratings:</strong> {movie.ratings}</p>
                <p> <strong>Price:</strong> {movie.price}</p>
            </div>
            <button onClick={() => addToCart(movie)}>Add to cart</button>
        </div>
    );
};

export default Movie;