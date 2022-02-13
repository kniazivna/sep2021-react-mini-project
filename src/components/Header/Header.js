import React from 'react';

import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {Link} from "react-router-dom";

const Header = ({themeSwitch}) => {

    return (
        <div className={css.headerWrapper}>
            <ThemeSwitcher themeSwitch={themeSwitch}/>
            <Link to={'/'}><div className={css.headerText}>Movies</div></Link>
            <UserInfo/>
        </div>
    );
};

export {Header};