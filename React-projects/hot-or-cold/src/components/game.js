import React from 'react';
import './game.css';

export default function Game() {
    return (
        <section>
            <h2>Make your Guess!</h2>
            <form>
                <input type="text" placeholder="Enter your Guess" id="userGuess" className="text" name="userGuess"  required/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
            <p>
                Guess #<span id="count">0</span>!
            </p>
            <ul id="guessList" className="guessBox clearfix">

            </ul>
        </section>
    );
}