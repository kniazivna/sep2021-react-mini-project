import React from 'react';

import css from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={css.userInfoWrapper}>
            <div className={css.userInfoImg}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-" +
                "User_font_awesome.svg.png"} alt=""/>
            </div>
            <div className={css.userInfoName}>
                Username
            </div>
        </div>
    );
};

export {UserInfo};