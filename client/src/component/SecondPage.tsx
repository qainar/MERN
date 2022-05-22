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
import Header from './Header'



const Button = styled.button`
    margin: 8px;
    width: 200px;
    background: #5cb85c;
    color: #f0f0f0;

    &:hover {
        transform: scale(1.05);
    }
`




const SecondPage: FC = () =>{
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        console.log(store.isAuth)
        if (localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])

    async function getUsers(){
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        }catch (e){

        }
    }


    if (store.isLoading){
        return <div>Loading...</div>
    }
    // if (!store.isAuth){
    //     return (
    //         <LoginForm/>
    //     )
    // }



    return (
        <div>
            {/*<h1>{store.isAuth ? `the user is logged in ${store.user.email}` : 'Log in'}</h1>*/}
            {/*<h1>{store.user.isActivated ? 'Acc activated' : 'Activate acc'}</h1>*/}
            {/*<button onClick={()=>store.logout()}>*/}
            {/*    Log out*/}
            {/*</button>*/}
            <Header/>
            <div>
                <button onClick={getUsers}>Get users</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
            <div>

                <Link to={'/about'}>click</Link>
            </div>
            <About/>
        </div>


    )


}

export default observer(SecondPage);