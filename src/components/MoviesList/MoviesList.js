import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAll/*, setPages*/} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';
import {useSearchParams} from "react-router-dom";



const MoviesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {movies,error, status} = useSelector(state => state['moviesReducer']);
    const dispatchMovies = useDispatch();
    console.log(movies);


    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
       const page = searchParams.get('page');
        dispatchMovies(getAll({page}));
        // dispatchMovies(setPages());
    }, [searchParams])




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
            {movies && movies.map(movieItem => <MoviesListCard key={movieItem.id} movieItem={movieItem}/>)}

        </div>
    );
};

export {MoviesList};