import React, {useEffect} from 'react';
import StarRatings from './react-star-ratings';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetailsById} from "../../store";

const StarsRating = () => {
    const {id} = useParams();
    const {movie} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        const movie_id = id;
        dispatch(getMovieDetailsById({movie_id}));

    }, [id]);


    return (
        <div>

        </div>
    );
};

export {StarsRating};