import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from "../../services";

export const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, {dispatch,rejectWithValue}) => {
       try{ const {data: {page, results,total_pages, total_results}} = await moviesService.getAll();
        dispatch(setMovies({movies:results}))
       } catch (e) {
           return rejectWithValue(e.message)
       }
    }
)

const initialState = {
    page: null,
    totalPages: null,
    totalResults: null,
    movies: [],
    singleMovie: {},
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

