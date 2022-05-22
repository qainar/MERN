import React, {FC, useContext, useEffect, useState, Component} from "react";
import LoginForm from "../component/LoginForm";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {IUser} from "../models/IUser";
import UserService from "../services/UserService";
import Main from "../component/Main";
import styled, {
    createGlobalStyle,
    keyframes,
} from 'styled-components';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import About from './About'
const Wrapper = styled.div`
  display: flex;
`



const Button = styled.button`
    margin: 8px;
    width: 200px;
    background: #5cb85c;
    color: #f0f0f0;

    &:hover {
        transform: scale(1.05);
    }
`




const Header: FC = () =>{
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    // useEffect(()=>{
    //     console.log(store.isAuth)
    //     if (localStorage.getItem('token')){
    //         store.checkAuth()
    //     }
    // }, [])





    return (
        <div>

                <h1>{store.isAuth ? `${store.user.email}` : 'Log in'}</h1>
                <button onClick={()=>store.logout()}>
                    Log out
                </button>

                <div>

                    <Link to={'/'}>click</Link>
                </div>
                <About/>


        </div>


    )


}

export default observer(Header);