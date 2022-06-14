import React from 'react';
import s from "./App.module.css"
import NavBar from "./Components/NavBar/navBar";
import {Route, Routes,} from "react-router-dom";
import Home from "./Pages/HomePage/home";
import SendMoneyPage from "./Pages/SendMoneyPage/sendMoneyPage";

const App = () => {

    return (
        <div className={s.app}>
            <NavBar/>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/send"} element={<SendMoneyPage/>}/>
            </Routes>
        </div>
    );
};

export default App;