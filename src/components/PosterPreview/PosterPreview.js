import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './PosterPreview.module.css';
import {getMovieDetailsById} from "../../store";

const PosterPreview = () => {

    const {id} = useParams();
    console.log(id);

    const {movie} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        const movie_id = id;
        dispatch(getMovieDetailsById({movie_id}));

    }, [id]);
    return (
        <div className={css.posterWrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.original_title} poster`}/>
        </div>
    );
};

export {PosterPreview};