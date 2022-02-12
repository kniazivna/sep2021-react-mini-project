import React from 'react';

import css from './GenreBadge.module.css'

const GenreBadge = ({movieWithGenre}) => {
    return (
        <>
            <div className={css.genreBadge}>{movieWithGenre}</div>
        </>
    );
};

export {GenreBadge};