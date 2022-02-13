import React, {useEffect} from 'react';

import css from './MoviesListCard.module.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import moviesReducer, {getMovieGenres} from "../../store/slices/movies.slice";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movieItem}) => {

    const {genre_ids, id, original_title, overview, poster_path, release_date, title} = movieItem;
    const {genres} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieGenres());

    }, [])

    const moviesWithGenre = genre_ids.map(genreId => {
            genres.find(item => {
                if (item.id === genreId) {
                    genreId = item.name
                }
            })
            return genreId
        }
    )


    return (
        <div className={css.movieCard}>
            <Link className={css.link} to={`${id}`.toString()}>
                <div className={css.movieCardContainer}>
                    <div className={css.poster}>
                        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>
                        <p>{overview}</p>
                    </div>
                    <div className={css.info}>
                        <div className={css.infoTitle}>{title}</div>
                        <div className={css.genreBadgeWrapper}>
                        {moviesWithGenre && moviesWithGenre.map(movieWithGenre =>
                            <GenreBadge key={movieWithGenre} movieWithGenre={movieWithGenre}/>)}
                        </div>
                        <div className={css.infoData}>Release date: {release_date}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {MoviesListCard};
