import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'

function Register(props) {
    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='login-wrapper'>
                <h3>회원가입</h3>
                <form action="/" method="post" id="login-form" >
                    <input type="text" name="username" placeholder="아이디" />
                    <input type="password" name="password" placeholder="비밀번호" />
                    <input type="password" name="confirm" placeholder="비밀번호 확인" />
                    <input type="text" name="name" placeholder="이름" />
                    <input type="email" name="email" placeholder="이메일" />
                    <input type="submit" value="회원가입" />
                </form>
                <div>
                    <a href="/login">로그인</a>
                </div>
            </div>
        </div>
    );
}

export default Register;