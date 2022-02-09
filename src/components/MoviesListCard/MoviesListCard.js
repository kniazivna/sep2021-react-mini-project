import React from 'react';

import css from './MoviesListCard.module.css';

const MoviesListCard = ({movieItem}) => {
    const{adult, backdrop_path, genre_ids, id, original_language,original_title, overview, popularity, poster_path, release_date, title,
        video, vote_average, vote_count} = movieItem;
    return (
        <div className={css.movieCard}>
           <div>
               <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${original_title} poster`}/>
           </div>
           <div>
               <h2>{title}</h2>
               <h5>{original_title}</h5>
               <p>{genre_ids}</p>
               <p>{overview}</p>
               <p>Release date: {release_date}</p>
           </div>
            <div>Rating: {vote_average} --- (total votes: {vote_count})</div>
        </div>
    );
};

export {MoviesListCard};