import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

import {getAll, getAllGenres} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';


const MoviesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {movies, pages, totalPages, error, status} = useSelector(state => state['moviesReducer']);
    const {genres} = useSelector(state => state['genresReducer']);
    const dispatchMovies = useDispatch();
    const dispatchGenres = useDispatch();
    console.log(movies);
    console.log(totalPages);
    console.log(pages);
    console.log(genres);


    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatchMovies(getAll({page}));
        dispatchGenres(getAllGenres())
    }, [searchParams])


    return (
        <div>
            <div className={css.movieListWrapper}>
                renders MoviesListCards

                2) вторая (следующая) страница с расширеным описанием фильма (подразумевается роутинг).
                она должна открываться если пользователь кликнул на карточку с фильмом

                реализовать страницу со списком фильмов, сделать свитчер темной/светлой темы стиля, сделать запросы на
                сервер

                {status === 'rejected' && <h1>Rejected</h1>}
                {error && <h1>{error}</h1>}
                {movies && movies.map(movieItem => <MoviesListCard key={movieItem.id} movieItem={movieItem}/>)}
            </div>
            <div className={css.buttonsWrapper}>
                <Link to={`?page=${+searchParams.get('page') - 1}`}>
                    <button  disabled={(searchParams.get('page')) <= 1}>Prev</button>
                </Link>
                <Link to={`?page=${+searchParams.get('page') + 1}`} >
                    <button disabled={(searchParams.get('page')) >= 500}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export {MoviesList};