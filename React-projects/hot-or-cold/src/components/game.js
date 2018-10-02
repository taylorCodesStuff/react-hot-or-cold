import React from 'react';
import './game.css';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    sendGuessToParent(event){
        event.preventDefault();
        const text = this.state.text;
        if(text && this.props.onGuess){
            this.props.onGuess(text);
        }
    }

    render() {
        const guesses = this.props.history.map((guess, index) => 
            <li key={index}>{guess}</li>
        );
        if(this.props.feedback === "You Won! Click new game to play again"){
            return (
                <section className="game">
                    <h2>{this.props.feedback}</h2>
                    <form onSubmit={e => this.sendGuessToParent(e)}> 
                        <input type="text" onChange={input => this.setState({text:input.target.value})}
                        placeholder="Enter your Guess" 
                        id="userGuess" 
                        className="text" 
                        name="userGuess" required/>
                        
                    </form>
                    <p>
                        Guess #<span id="count">{this.props.history.length}</span>!
                    </p>
                    <ul id="guessList" className="guessBox clearfix">
                        {guesses}
                    </ul>
                </section>
            );
        }
        return (
            <section className="game">
                <h2>{this.props.feedback}</h2>
                <form onSubmit={e => this.sendGuessToParent(e)}> 
                    <input type="text" onChange={input => this.setState({text:input.target.value})}
                    placeholder="Enter your Guess" 
                    id="userGuess" 
                    className="text" 
                    name="userGuess" required/>
                    <input type="submit" 
                    id="guessButton" className="button" name="submit" value="Guess" />
                </form>
                <p>
                    Guess #<span id="count">{this.props.history.length}</span>!
                </p>
                <ul id="guessList" className="guessBox clearfix">
                    {guesses}
                </ul>
            </section>
        );
    }
}

