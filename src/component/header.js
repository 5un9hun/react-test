import React from 'react';
import '../public/css/header.css';

function Header(props) {
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
                <a href="/login">로그인</a>
                <a href="/register">회원가입</a>
            </nav>
        </header>
    );
}

export default Header;