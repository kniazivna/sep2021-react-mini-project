import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieInfo.module.css';
import {getMovieDetailsById} from "../../store";



const MovieInfo = () => {

    const {id} = useParams();
    const {movie} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        const movie_id = id;
        dispatch(getMovieDetailsById({movie_id}));

    }, [id]);

    return (
        <div className={css.movieInfoWrapper}>

            <div className={css.aboutMovieWrapper}>
                <div className={css.aboutMovieTitle}>Release date:</div>
                <div className={css.aboutMovieText}>{movie.release_date}</div>
            </div>

            <div className={css.aboutMovieWrapper}>
                <div className={css.aboutMovieTitle}>Production countries:</div>
                <div className={css.aboutMovieText}>
                    <div
                        className={css.itemFlex}>{movie.production_countries && movie.production_countries.map(country =>
                        <div key={country.name}>{country.name}</div>)}
                    </div>
                </div>
            </div>

            <div className={css.aboutMovieWrapper}>
                <div className={css.aboutMovieTitle}>Genres:</div>
                <div className={css.aboutMovieText}>
                    <div
                        className={css.itemFlex}>{movie.genres && movie.genres.map(genre =>
                        <div key={genre.id}>{genre.name}</div>)}
                    </div>
                </div>
            </div>

                <div className={css.aboutMovieWrapper}>
                    <div className={css.aboutMovieTitle}>Budget:</div>
                    <div className={css.aboutMovieText}>{movie.budget}</div>
                </div>

            <div className={css.aboutMovieWrapper}>
                <div className={css.aboutMovieTitle}>Languages:</div>
                <div className={css.aboutMovieText}>
                    <div
                        className={css.itemFlex}>{movie.spoken_languages && movie.spoken_languages.map(language =>
                        <div key={language.english_name}>{language.english_name}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};