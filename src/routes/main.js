import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'
import Poster from '../public/img/poster.jpg';

function Main(props) {
    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='movie'>
                <div><img src={Poster} /></div>
                <div>
                    <p>액션</p>
                    <p>어드벤쳐</p>
                    <p>코메디</p>
                    <p>판타지</p>
                    <p>로맨스</p>
                    <p>호러</p>
                    <p>SF</p>
                    <p>스릴러</p>
                </div>
            </div>
            <div id="reroll">
                <button>Reroll</button>
            </div>
        </div>
    );
}

export default Main;