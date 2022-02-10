import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from "../../services";

export const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, {dispatch,rejectWithValue}) => {
       try{
           const {results} = await moviesService.getAll(page);
        dispatch(setMovies({movies:results}));
        dispatch(setPages());
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
    totalPages: 500,
    pages: [],
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
        }
    },
    extraReducers:{
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const moviesReducer = moviesSlice.reducer;
export default moviesReducer;

export const {setMovies, setPages} = moviesSlice.actions;



