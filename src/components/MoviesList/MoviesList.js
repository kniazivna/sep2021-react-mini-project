import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAll} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

const MoviesList = () => {

    const {movies,error, status} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();
    console.log(movies);

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <div className={css.movieListWrapper}>
            renders MoviesListCards

            1)пагинация
            2) вторая (следующая) страница с расширеным описанием фильма (подразумевается роутинг).
            она должна открываться если пользователь кликнул на карточку с фильмом

            реализовать страницу со списком фильмов, сделать свитчер темной/светлой темы стиля, сделать запросы на
            сервер

            {status === 'rejected' && <h1>Rejected</h1>}
            {error && <h1>{error}</h1>}
            {movies.map(movieItem => <MoviesListCard key={movieItem.id} movieItem={movieItem}/>)}
        </div>
    );
};

export {MoviesList};