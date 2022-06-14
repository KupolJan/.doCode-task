import React from 'react';
import s from './main.module.css'
import curSymbolMapping from "../../../Configs/symbols";
import {NavLink} from "react-router-dom";

const Main = ({account}) => {

    return (
        <div className={s.main}>
            <small className={s.balanceTitle}>Balance</small>
            <div className={s.balanceBlock}>
                <div className={s.balance}>{account && `${curSymbolMapping[account.currency].symbol}${account.balance.toFixed(2)}`}</div>
                <button className={s.topUpBtn}>
                    <img src="/Icons/bigPinkPig.png" alt=""/>
                    Top Up
                </button>
            </div>

            <div className={s.quickTransBlock}>
                <small className={s.transTitle}>Quick transactions</small>
                <div className={s.send}>
                    <NavLink className={s.navLink} to="/send">
                        <img className={s.sendLogo} src="/Icons/bigSend.png" alt=""/>
                        <small className={s.sendText}>Send Money</small>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Main;