import React from 'react';
import '../public/css/header.css';

function Header(props) {

    let loginStatus = null
    if(1==2) { //유효 세션 존재할 때
        loginStatus = [<span>환영합니다! ㅁㅁㅁ님</span>, <a href="/register">마이페이지</a>]
    }
    else { //유효 세션 없을 때
        loginStatus = [<a href="/login">로그인</a>, <a href="/register">회원가입</a>]
    }

    return (
        <header>
            <a href="/">GachaPEDIA</a>
            <nav class="">
                <a>영화</a>
                <a>TOP 100</a>
            </nav>
            <nav>
                <input type="search" name="search" placeholder="검색"/>
            </nav>
            <nav>
                {loginStatus}
            </nav>
        </header>
    );
}

export default Header;