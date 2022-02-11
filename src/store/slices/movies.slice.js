import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from "../../services";

export const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, {dispatch,rejectWithValue}) => {
       try{
           const {results, total_pages} = await moviesService.getAll(page);
        dispatch(setMovies({movies:results}));
        dispatch(setPages());
       /* dispatch(setTotalPages({totalPages:total_pages}));*/
       } catch (e) {
           return rejectWithValue(e.message)
       }
    }
);
export const getMovieDetailsById = createAsyncThunk(
    'moviesSlice/getMovieDetailsById',
    async ({movie_id}, {dispatch,rejectWithValue}) => {
        try{
           const movie = await moviesService.getMovieDetailsById(movie_id);
            dispatch(setMovie({movie}));
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
    totalPages: 500,//тут я взяла цю цифру, бо це максимум сторінок, які віддає API, я пробувала взяти к-ть сторінок через
                    //setTotalPages, але все одно після 500 сторінки падає 422 помилка, розумію, що більше 500 сторінок
                    // витягнути не можливо, setTotalPages закоментувала, а не видалила спеціально, щоб отримати фідбек,
                    // якщо щось не так робила, в документації теж так вказано: 'page must be less than or equal to 500'
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
      /*  setTotalPages: (state, action) => {
            state.totalPages = action.payload.totalPages
        },*/
        setPages: (state) => {
            for (let i = 1; i <= state.totalPages; i++) {
                state.pages.push(i)
            }
        },
        setMovie: (state, action) => {
            state.movie = action.payload.movie

        }

    },
    extraReducers:{
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMovieDetailsById.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const moviesReducer = moviesSlice.reducer;
export default moviesReducer;

export const {setMovies, setPages/*, setTotalPages*/, setMovie} = moviesSlice.actions;



