import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'

function MyPage(props) {
    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='mypage'>
                <div className='mypage-menu'>
                    <a>메뉴</a>
                    <a>회원정보 수정</a>
                    <a>북마크 관리</a>
                    <a>그 외</a>
                    <a>회원탈퇴</a>
                </div>
                <div className='mypage-main'>
                    <p>회원정보수정</p>
                    <form action="/" method="post" id="menu-form" >
                        <input type="submit" value="수정" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyPage;