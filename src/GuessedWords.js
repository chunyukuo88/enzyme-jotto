import React from "react";
import PropTypes from 'prop-types';

const GuessedWords = (props) => (
    <div data-test="component-guessed-words">
        {props.guessedWords.length === 0
            ? Instructions() : WordList(props)
        }
    </div>
);

const Instructions = () => (
    <div data-test="guess-instructions">
        Guess a word!
    </div>
);

const WordList = (props) => {
    const rowsOfGuessedWords = props.guessedWords.map((word, index) => (
       <tr data-test="guessed-word" key={index}>
           <td>{word.guessedWord}</td>
           <td>{word.letterMatchCount}</td>
       </tr>
    ));
    return (
      <div data-test="guessed-words">
        <h3>Guessed Words:</h3>
        <table className="table table-sm">
            <thead className="thead-light">
                <tr><th>Guess</th><th>Matching Letters</th></tr>
            </thead>
            <tbody>
                { rowsOfGuessedWords }
            </tbody>
        </table>
      </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWords;
