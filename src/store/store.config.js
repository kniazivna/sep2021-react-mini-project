import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from './slices/movies.slice';

const store = configureStore({
    reducer: {
        moviesReducer
    }
})

export default store;