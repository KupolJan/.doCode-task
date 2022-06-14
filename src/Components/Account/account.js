import React, {useState} from 'react';
import s from './account.module.css'
import curSymbolMapping from "../../Configs/symbols";

const Account = ({acc, getBalance, setActiveAcc, activeAcc}) => {

    const onAccClick = () => {
        setActiveAcc(acc);
        getBalance(acc);
    }

    return (
        <div className={s.account} onClick={onAccClick} style={activeAcc === acc ?
            {background:"linear-gradient(180deg, #FD3A6C 0%, #F5855C 100%)",
                boxShadow:"0px 0px 7px #EE4874",
                position:"relative",
                left:"19px"
            }

            : {backgroundColor: "white"}}>
            <div className={s.title}>
                <img src={curSymbolMapping[acc.currency].img}/>
                {`${acc.title}`}
            </div>

            <div className={s.balance}>
                {`${curSymbolMapping[acc.currency].symbol}${acc.balance.toFixed(2)}`}
            </div>
        </div>
    );
};

export default Account;