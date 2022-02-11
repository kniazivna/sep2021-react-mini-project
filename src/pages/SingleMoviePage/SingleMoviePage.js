import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './SingleMoviePage.module.css';
import {getMovieDetailsById} from "../../store";
import {MovieInfo, PosterPreview} from "../../components";

const SingleMoviePage = () => {

    const {id} = useParams();
    console.log(id);

    const {movie} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        const movie_id = id;
        dispatch(getMovieDetailsById({movie_id}));

    }, [id]);
    console.log(movie);

    return (
        <div className={css.movieDetailsWrapper}>
            <div>Назад</div>
            {movie && <div>
                <div className={css.title}>{movie.title}</div>
                <div className={css.infoBlock}>
                    <MovieInfo/>
                    <PosterPreview/>
                </div>
                <div className={css.movieOverview}>
                    <div>{movie.tagline}</div>
                    {movie.overview}
                </div>
            </div>}
            <div>Рекомендації</div>

        </div>

    )
        ;
};

export {SingleMoviePage};