import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Movie.css';
const Movie = ({ movie, addToCart }) => {
    return (
        <div className='movie'>
            <img src={movie.img} alt="" />
            <div className='movie-details'>
                <h4 className='movie-name'>Name: {movie.name}</h4>
                <p><strong>ratings:</strong> {movie.ratings}</p>
                <p> <strong>Price:</strong> $ {movie.price}</p>
            </div>
            <button onClick={() => addToCart(movie)}>Add to cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Movie;