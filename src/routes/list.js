import React from 'react';
import Header from '../component/header';
import '../public/css/main.css'
import Poster from '../public/img/poster.jpg';

function List(props) {
    return (
        <div className='App'>
            <Header />
            <div className="logo">GachaPEDIA</div>
            <div className='movie-list'>
                <div className="grid-item">1</div>
                <div className="grid-item">1</div>
                <div className="grid-item">1</div>
                <div className="grid-item">1</div>
            </div>
            
        </div>
    );
}

export default List;