import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'

function Main(props) {
    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='mypage'>
                <div className='mypage-menu'>
                    <h3>메뉴</h3>
                    <p>?</p>
                    <p>?</p>
                    <p>?</p>
                </div>
                <div className='mypage-main'>
                    <h3>회원정보수정</h3>
                    <form action="/" method="post" id="menu-form" >
                        <input type="submit" value="수정" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;