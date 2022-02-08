import React, {useEffect} from 'react';
import {moviesService} from "../../services";

const MoviesPage = () => {


    useEffect(() => {
            moviesService.getAll()
                .then(value => console.log(value));
        }
        , [])

      return (
          <div>
              1)пагинация
              2) вторая (следующая) страница с расширеным описанием фильма (подразумевается роутинг).
              она должна открываться если пользователь кликнул на карточку с фильмом

              реализовать страницу со списком фильмов, сделать свитчер темной/светлой темы стиля, сделать запросы на сервер

          </div>
      );
};

export {MoviesPage};