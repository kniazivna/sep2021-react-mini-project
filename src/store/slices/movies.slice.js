import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {moviesService} from "../../services";

export const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAll();
            return movies;
        } catch (e) {
            return rejectWithValue(e.message);
        }

    }
)

const initialState = {
    page: 1,
    totalPages:32252,
    movies: [],
    singleMovie: {},
    genres:[],
    status: null,
    error: null
}

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    extraReducers: {

        [getAll.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const moviesReducer = moviesSlice.reducer;

export const {} = moviesSlice.actions;

export default moviesReducer;

