import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'

function Main(props) {
    return (
        <div className='App'>
            <Header />
            <div class="logo">GachaPEDIA</div>
            <div class='login-wrapper'>
                <h3>로그인</h3>
                <form action="/" method="post" id="login-form" >
                    <input type="text" name="username" placeholder="이메일 또는 사용자 아이디" />
                    <input type="password" name="password" placeholder="비밀번호" />
                    <input type="submit" value="로그인" />
                    
                </form>
                <a>회원가입</a>
            </div>
        </div>
    );
}

export default Main;