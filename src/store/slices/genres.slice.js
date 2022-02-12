// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import {genresService} from "../../services";
// import {setMovies} from "./movies.slice";
//
//
//
// export const getAllGenres = createAsyncThunk(
//     'genresSlice/getAllGenres',
//     async (_, {rejectWithValue,dispatch}) => {
//         try {
//             const {genres} = await genresService.getAll();
//             dispatch(setGenres({genres}))
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//
//     }
// );
//
// const initialState = {
//     genres: [],
//     status: null,
//     error: null
// }
//
// const genresSlice = createSlice({
//     name: 'genresSlice',
//     initialState,
//     reducers:{
//         setGenres: (state, action) => {
//             state.genres = action.payload.genres
//         }
//     },
//     extraReducers: {
//
//         [getAllGenres.rejected]: (state, action) => {
//             state.status = 'rejected';
//             state.error = action.payload;
//         }
//     }
// })
//
//
// const genresReducer = genresSlice.reducer;
//
// export const {setGenres} = genresSlice.actions;
//
// export default genresReducer;
//
