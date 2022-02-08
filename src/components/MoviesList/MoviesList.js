import React, {useEffect} from 'react';
import {genresService, moviesService} from "../../services";
import {useLocation} from "react-router-dom";

const MoviesList = () => {
    // const{path} = useLocation();

    useEffect(() => {
        genresService.getAll()
            .then(value => console.log(value))
    }, [])
    useEffect(() => {
        moviesService.getAll()
            .then(value => console.log(value))
    }, [])

    return (
        <div>
            renders MoviesListCards
        </div>
    );
};

export {MoviesList};