import React from 'react';

import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = ({themeSwitch}) => {

    return (
        <>
            <button  className={css.switchButton} onClick={themeSwitch}> Switch theme</button>
        </>
    );
};

export {ThemeSwitcher};