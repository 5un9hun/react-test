import React, { useState } from 'react';
import Header from '../component/header';
import '../public/css/main.css';
import axios from 'axios';
import cookie from 'react-cookies';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = async (e) => {
        e.preventDefault();

        //유효 세션 처리
        if(1) {
            
        }

        try {
            const res = await axios.post("/api/login", {
                username:username,
                password:password,
            })
            //console.log(res.data)
            alert(res.data['message'])
            if(res.data['success'] === true) {
                const expires = new Date()
                expires.setMinutes(expires.getMinutes() + 60)
                cookie.save('userid', res.data['memberId'], {
                    path : '/',
                    expires,
                });
                window.location.href="/"
            }
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='login-wrapper'>
                <h3>로그인</h3>
                <form onSubmit={login} id="login-form" >
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="이메일 또는 사용자 아이디" />
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
                    <input type="submit" value="로그인" />
                </form>
                <div>
                    <a href="/register">회원가입</a>
                </div>
            </div>
        </div>
    );
}

export default Login;