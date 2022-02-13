import React from 'react';

import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";

const Header = ({themeSwitch}) => {

    return (
        <div className={css.headerWrapper}>
            <ThemeSwitcher themeSwitch={themeSwitch}/>
            <h1>Movies</h1>
            <UserInfo/>
        </div>
    );
};

export {Header};