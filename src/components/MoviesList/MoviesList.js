import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

import {getAll} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

const MoviesList = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const {movies, totalPages, error, status} = useSelector(state => state['moviesReducer']);
    const dispatchMovies = useDispatch();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatchMovies(getAll({page}));

    }, [searchParams])

    return (
        <div>
            сделать свитчер темной/светлой темы стиля!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            сервер
            <div className={css.movieListWrapper}>
                {status === 'rejected' && <h1>Rejected</h1>}
                {error && <h1>{error}</h1>}
                {movies && movies.map(movieItem => <MoviesListCard key={movieItem.id} movieItem={movieItem}/>)}
            </div>
            <div className={css.buttonsWrapper}>
                <Link to={`?page=${+searchParams.get('page') - 1}`}>
                    <button disabled={(searchParams.get('page')) <= 1}>Prev</button>
                </Link>
                <Link to={`?page=${+searchParams.get('page') + 1}`}>
                    <button disabled={(searchParams.get('page')) >= totalPages}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export {MoviesList};