import React, {FC, useContext, useEffect, useState, Component} from "react";
import LoginForm from "./component/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import Main from "./component/Main";
import About from "./component/About";
import styled, {
    createGlobalStyle,
    keyframes,
} from 'styled-components';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import SecondPage from "./component/SecondPage";




const Button = styled.button`
    margin: 8px;
    width: 200px;
    background: #5cb85c;
    color: #f0f0f0;

    &:hover {
        transform: scale(1.05);
    }
`




const App: FC = () =>{



    return (
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/reg' element={<Main/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/second' element={<SecondPage/>}/>
        </Routes>

    )


}

export default observer(App);