import React from 'react';
import Nav from './nav';
import Game from './game';
import './board.css';

export default class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            guess: 0,
            history: [],
            answer: Math.floor(Math.random() * 101),
            feedback: "Make your Guess!"
        }
    }

    calculateFeedback(guessNum){
        let diff = Math.abs(guessNum - this.state.answer);
        if(diff === 0){
            return "You Won! Click new game to play again";
        } 
        else if(diff <= 15) return "Hot";
        else return "Cold";
    }

    updateGuess(num){
        if(!isNaN(num)){
            num = parseInt(num, 10);
            if(this.state.history.indexOf(num) > -1){
                alert("You've already guessed this Number!");
            } else {
                if(num >= 0 && num <= 100){
                    let newFeedback = this.calculateFeedback(num);
                    this.setState({
                        guess: num,
                        history: [...this.state.history, num],
                        feedback: newFeedback
                    });
                } else alert('Guess must be between 0 and 100');
            }
        } else {
            alert('Guess must be a number');
        }
    }

    reset() {
        this.setState({
            guess: 0,
            history: [],
            answer: Math.floor(Math.random() * 101),
            feedback: "Make your Guess!"
        });
    }

    render() {
        console.log('answer', this.state.answer)
        console.log('history', this.state.history)
        return (
            <div>
                <Nav onClick={() => this.reset()} />
                <h1>HOT or COLD</h1>  
                <Game onGuess={guess => this.updateGuess(guess)} history={this.state.history} feedback={this.state.feedback} />
            </div>
        );   
    }
}
