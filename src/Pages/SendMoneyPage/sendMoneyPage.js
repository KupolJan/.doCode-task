import React from 'react';
import s from './sendMoney.module.css'
import Accounts from "../../Components/Accounts/accounts";


const SendMoneyPage = () => {
    return (

        <div className={s.sendMoney}>
            <div className={s.accounts}>
                <strong className={s.title}>
                    <img src="/Icons/pinkWallet.png" alt=""/>
                    Send Money From:
                </strong>
                <Accounts/>
            </div>

            <div className={s.main}>
                <img src="/Icons/pinkSendSmall.png" alt=""/>
                Send Money
            </div>
        </div>
    );
};

export default SendMoneyPage;