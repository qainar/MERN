import React, {FC, useContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import photo from "../image/lolfl.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import styled, {createGlobalStyle} from "styled-components";
import {Context} from "../index";

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
  display: flex;
  flex-wrap: wrap;
`
const Wrapper = styled.div`
  margin-top: 20px;
  padding: 30px;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
const WrapContainer = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
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
  text-align: center;
  justify-content: center;
`
const Login = styled.div`
  position: relative;
  width: 400px;
  z-index: 1;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  font-family: 'Comfortaa';
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
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



export const Main: FC = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const {store} = useContext(Context)
    function ForReg(){
        store.registration(email, password, name, number)
    }
    function GetBack(){
        navigate(-1)
    }
    return(
        <div>
            <Section>
                <ContainerLogin>
                    <Wrapper>
                        <WrapContainer>
                            <Span>
                                Регистрация пользователя
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
                                <Login>
                                    <Input
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        placeholder={'Name'}
                                        type={'text'}
                                    />
                                </Login>
                                <Login>
                                    <Input
                                        onChange={e => setNumber(e.target.value)}
                                        value={number}
                                        placeholder={'Number'}
                                        type={'text'}
                                    />
                                </Login>
                                <Login_btn_container>
                                    <Login_btn
                                        //onClick={()=> store.registration(email, password, name, number)}
                                        onClick={()=>{
                                            ForReg();
                                            GetBack()
                                        }}
                                    >
                                        Registration
                                    </Login_btn>
                                </Login_btn_container>
                            </LoginUser>
                        </WrapContainer>
                    </Wrapper>
                </ContainerLogin>

            </Section>
            <GlobalStyle/>
        </div>
    )
}

export default Main