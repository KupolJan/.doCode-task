import React, {useState} from 'react';
import Accounts from "../../Components/Accounts/accounts";
import s from "./home.module.css"
import Main from "./Main/main";

const Home = () => {
    const [account, setAccount] = useState(null);
    
    const getBalance = (account) => {
        setAccount(account)
    }

    return (
        <div className={s.home}>
            <div className={s.accounts}>
                <strong className={s.title}>Your accounts</strong>
                <Accounts getBalance={getBalance}/>
            </div>
            <Main account={account}/>
        </div>
    );
};

export default Home;