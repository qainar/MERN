import React, {FC, useContext, useState, Component} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import styled, {
    createGlobalStyle,
    keyframes,
} from 'styled-components';
import  '../style/fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../style/App.css'
import photo from '../image/lolfl.png'
import {Routes, Route, Link} from 'react-router-dom'
import {Main} from './Main'
import SecondPage from "./SecondPage";





const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap');  
  *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      width: 100%;
      height: 100%;
    }
    
    body {
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      height: 100vh;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
`;
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
const ContainerLogin = styled.div`
  width: 700px;
  background-color: white;
  overflow: hidden;
  border-radius: 15px;
  padding: 30px;
  height: 500px;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
`
const WrapContainer = styled.div`
  
`
const Span = styled.span`
  font-family: 'Comfortaa';
  font-size: 24px;
  color: #333333;
  text-align: center;
  line-height: 1.2;
  width: 100%;
  display: block;
`
const LoginUser = styled.div`
  margin-top: 40px;
`
const Login = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
`
const Input = styled.input`
  font-family: 'Comfortaa';
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  display: block;
  width: 100%;
  background-color: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
  border: none;
`
const Login_btn_container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`
const Login_btn = styled.button`
  font-family: 'Comfortaa';
  font-size: 15px;
  line-height: 1.5;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: none;
  background: #57b846;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  transition: .4s;
  
  &:hover {
    background: #666666;
  }
  
`
const Registration_btn = styled.a`
  font-family: 'Comfortaa';
  font-size: 10px;
  line-height: 1.5;
  color: #666666;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: .4s;
  margin-right: 5px;
  &:hover {
    font-size: 12px;
  }
 
`
const Create_acc = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
`
const Logo_pick = styled.img`
    width: 250px;
    max-width: 100%;
`


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

    if (store.isAuth){
        return (
            <SecondPage/>
        )
    }
    return (
            <div>
                
                <Section>
                    <ContainerLogin>
                         <Wrapper>
                             <div>
                                 <Logo_pick src={photo} alt={photo}></Logo_pick>
                             </div>
                             <WrapContainer>
                                 <Span>
                                     Логин пользователя
                                 </Span>
                                 <LoginUser>
                                     <Login>
                                         <Input
                                             onChange={e => setEmail(e.target.value)}
                                             value={email}
                                             placeholder={'Email'}
                                             type={'text'}
                                         />
                                     </Login>
                                     <Login>
                                         <Input
                                             onChange={e => setPassword(e.target.value)}
                                             value={password}
                                             placeholder={'Password'}
                                             type={'password'}
                                         />
                                     </Login>
                                     <Login_btn_container>
                                         <Login_btn onClick={()=> store.login(email, password)}>
                                             Login
                                         </Login_btn>
                                     </Login_btn_container>
                                     <Create_acc>
                                         <Registration_btn href='/reg'
                                             //onClick={()=> store.registration(email, password)}
                                         >
                                             Registration
                                             <FontAwesomeIcon icon={ faArrowRight}/>
                                         </Registration_btn>
                                     </Create_acc>
                                 </LoginUser>
                             </WrapContainer>
                         </Wrapper>
                </ContainerLogin>

                </Section>
                <GlobalStyle/>

            </div>
    );
};




export default observer(LoginForm);