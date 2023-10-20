import React from 'react';
import ListOfFilms from '../../assets/ListOfFilms.js';
import './Films.css';

const Films = () => {
    return (
        <div className="film-container">
            {ListOfFilms.map(film => (
                <div key={film.id} className="film-card">
                    <img src={film.Image} alt={film.Title} className="film-image"/>
                    <h3 className="film-title">{film.Title}</h3>
                    <p className="film-year">{film.Year}</p>
                    <p className="film-nation">{film.Nation}</p>
                </div>
            ))}
        </div>
    );
};

export default Films;