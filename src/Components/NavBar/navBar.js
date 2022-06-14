import React, {useState} from 'react';
import s from './navBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div className={s.nav}>
            <div className={s.links}>
                <div className={s.navLink}>
                    <img src="/Icons/home.png" alt=""/>
                    <NavLink activeClassName='active' to="/home">Home</NavLink>
                </div>

                <div className={s.navLink}>
                    <img src="/Icons/send.png" alt=""/>
                    <NavLink to="/send">Send Money</NavLink>
                </div>

                <div className={s.navLink}>
                    <img src="/Icons/piggy.png" alt=""/>
                    <a href="#">Top Up</a>
                </div>

                <div className={s.navLink}>
                    <img src="/Icons/wallet.png" alt=""/>
                    <a href="#">Accounts</a>
                </div>
            </div>

            <div className={s.profile}>
                <img src="/Icons/avatar.png" alt=""/>
                <a href="#">Profile</a>
            </div>
        </div>
    );
};

export default NavBar;