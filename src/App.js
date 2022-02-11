import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import  './App.css';
import {Layout} from "./components";
import {MoviesPage, SingleMoviePage} from "./pages";

function App() {
    return (
        <Routes>

            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<SingleMoviePage/>}/>


            </Route>

        </Routes>
    );
}

export default App;




