import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './MovieCart.css'
const MovieCart = ({ movie, deleteFromCart }) => {
    return (
        <div className='movie-item'>
            <small>
                <img src={movie.img} alt="" />
                <h3>{movie.name}</h3>
                <h2>
                    <button onClick={() => deleteFromCart(movie)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </h2>
            </small>
        </div >
    );
};

export default MovieCart;