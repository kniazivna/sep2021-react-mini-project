import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import css from './Layout.module.css';
import useLocalStorage from "use-local-storage";


const Layout = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const themeSwitch =() =>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className={css.wrapper} data-theme={theme}>
            <header className={css.header}>
                <Header themeSwitch={themeSwitch}/>
            </header>
            <main className={css.main}>
                <Outlet/>
            </main>
            <footer className={css.footer}>
                <Footer/>
            </footer>

        </div>
    );
};

export {Layout};