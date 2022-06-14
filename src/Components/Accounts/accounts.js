import React, {useEffect, useState} from 'react';
import axios from "axios";
import Account from "../Account/account";
import s from './accounts.module.css'

const Accounts = ({getBalance}) => {

    const [accounts, setAccounts] = useState([]);
    const [activeAcc, setActiveAcc] = useState(null);

    useEffect(() => {
        axios.get('https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data', {
            headers:{
                "x-api-key":"ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59"
            }
        })
            .then((res) => setAccounts(res.data.body.accounts));
    }, []);

    return (
        <div>
            <div className={s.accounts}>
                {
                    accounts && accounts.map((acc) => {
                        return <Account
                            key={acc.title}
                            acc={acc}
                            getBalance={getBalance}
                            setActiveAcc={setActiveAcc}
                            activeAcc={activeAcc}
                        />
                    }

                    )}
            </div>
        </div>
    );
};

export default Accounts;