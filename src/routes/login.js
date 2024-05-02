import React, { useState } from 'react';
import Header from '../component/header';
import '../public/css/main.css';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/login", {
                username,
                password,
            })
            console.log(res.data)
        } catch(err) {
            console.error(err)
        }
        
        /*if(response['token'] == 'good') {
            alert('로그인 성공')
        }
        else {
            alert("아이디 또는 비밀번호가 다릅니다.") 
        }*/
    };

    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='login-wrapper'>
                <h3>로그인</h3>
                <form onSubmit={handleSubmit} id="login-form" >
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