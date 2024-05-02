import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'

function Main(props) {
    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='login-wrapper'>
                <h3>회원정보수정</h3>
                <form action="/" method="post" id="login-form" >
                    
                    <input type="submit" value="수정" />
                </form>
            </div>
        </div>
    );
}

export default Main;