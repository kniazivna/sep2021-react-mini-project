import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {genresService, moviesService} from "../../services";

export const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, {dispatch, rejectWithValue}) => {
        try {
            const {results} = await moviesService.getAll(page);
            dispatch(setMovies({movies: results}));
            dispatch(setPages());
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieDetailsById = createAsyncThunk(
    'moviesSlice/getMovieDetailsById',
    async ({movie_id}, {dispatch, rejectWithValue}) => {
        try {
            const movie = await moviesService.getMovieDetailsById(movie_id);
            dispatch(setMovie({movie}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieGenres = createAsyncThunk(
    'moviesSlice/getMovieGenres',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const {genres} = await genresService.getAll();
            dispatch(setMoviesGenres({genres}))
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    movies: [],
    totalPages: 500,
    pages: [],
    movie: null,
    genres: [],
    status: null,
    error: null
}

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload.movies
        },
        setPages: (state) => {
            for (let i = 1; i <= state.totalPages; i++) {
                state.pages.push(i)
            }
        },
        setMovie: (state, action) => {
            state.movie = action.payload.movie
        },
        setMoviesGenres: (state, action) => {
            state.genres = action.payload.genres
        }
    },
    extraReducers: {
        [getAll.rejected]: (state,action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMovieDetailsById.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMovieGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;

export const {setMovies, setPages, setMovie, setMoviesGenres} = moviesSlice.actions;



