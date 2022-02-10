import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from "../../services";

export const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, {dispatch,rejectWithValue}) => {
       try{
           const {results} = await moviesService.getAll(page);
        dispatch(setMovies({movies:results}));
       } catch (e) {
           return rejectWithValue(e.message)
       }
    }
)

/*export const getMovieGenres = createAsyncThunk(
    'moviesSlice/getMovieGenres',
    async (_, {dispatch,rejectWithValue}) => {
        try{
            const {genres} = await genresService.getAll();
            dispatch(setGenres({genres}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)*/

const initialState = {
    movies: [],
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
    },
    extraReducers:{

        [getAll.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const moviesReducer = moviesSlice.reducer;

export const {setMovies} = moviesSlice.actions;

export default moviesReducer;

