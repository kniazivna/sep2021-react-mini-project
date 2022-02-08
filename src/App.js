import React from 'react';
import {MoviesList} from "./components";
import {Routes} from "react-router-dom";
import {MoviesPage, SingleMoviePage} from "./pages";

function App() {
    return (
       /* <Routes>

            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'users'} element={<MoviesList/>}/>
                <Route path={':id'} element={<SingleMoviePage/>}/>


            </Route>

        </Routes>*/
        <><MoviesPage/></>
    );
}

export default App;




