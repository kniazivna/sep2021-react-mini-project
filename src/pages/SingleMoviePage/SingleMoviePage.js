import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './SingleMoviePage.module.css';
import {getMovieDetailsById} from "../../store";
import {MovieInfo,  PosterPreview} from "../../components";

const SingleMoviePage = () => {

    const {id} = useParams();
    const {movie} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const movie_id = id;
        dispatch(getMovieDetailsById({movie_id}));

    }, [id]);

    const back = () => {
        navigate(-1);
    }

    return (
        <div className={css.movieDetailsWrapper}>
            <button className={css.btn} onClick={back}>Back</button>
            {movie && <div>
                <div key={movie.id} className={css.title}>{movie.title}</div>
                <div className={css.infoBlock}>
                    <MovieInfo/>
                    <PosterPreview/>
                </div>
                <div className={css.movieOverview}>
                    <div>{movie.tagline}</div>
                    {movie.overview}
                </div>
            </div>}
        </div>

    );
};

export {SingleMoviePage};