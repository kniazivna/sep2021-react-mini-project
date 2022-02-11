import React, {useEffect} from 'react';
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './SingleMoviePage.module.css';
import {getMovieDetailsById, getMovieRecommendationsById} from "../../store";
import {MovieInfo, MoviesListCard, PosterPreview} from "../../components";

const SingleMoviePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const {movies, error, status} = useSelector(state => state['moviesReducer']);
    const dispatchMovies = useDispatch();


   /* useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');


    }, [searchParams])*/



    const {id} = useParams();
    const {movie} = useSelector(state => state['moviesReducer']);
    const {data} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        const movie_id = id;
        dispatch(getMovieDetailsById({movie_id}));
        dispatchMovies(getMovieRecommendationsById({page, movie_id}));

    }, [id, searchParams]);

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
            Рекомендації
                <div className={css.movieListWrapper}>
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

export {SingleMoviePage};