import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import css from './Layout.module.css';

const Layout = () => {
    return (
        <div className={css.wrapper}>
            <header className={css.header}>
                <Header/>
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