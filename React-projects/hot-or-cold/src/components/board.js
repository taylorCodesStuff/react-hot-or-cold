import React from 'react';
import Nav from './nav';
import Game from './game';
import './board.css';

export default function Board() {
    return (
        <div>
            <Nav />
            <h1>HOT or COLD</h1>  
            <Game />
        </div>
    );
}
