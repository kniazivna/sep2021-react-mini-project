import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {genresService} from "../../services";



export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genresService.getAll();
            return genres;
        } catch (e) {
            return rejectWithValue(e.message);
        }

    }
)

const initialState = {
    genres: [],
    status: null,
    error: null
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    extraReducers: {

        [getAllGenres.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const genresReducer = genresSlice.reducer;

export const {} = genresSlice.actions;

export default genresReducer;

