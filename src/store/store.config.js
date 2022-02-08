import {configureStore} from '@reduxjs/toolkit';

import genresReducer from './slices/genres.slice';
import moviesReducer from './slices/movies.slice';

const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer
    }
})

export default store;