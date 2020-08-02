import React from "react";
import PropTypes from 'prop-types';

const GuessedWords = (props) => (
    <div data-test="component-guessed-words">
        {props.guessedWords.length === 0 && Instructions()}
    </div>
);

const Instructions = () => (
    <div data-test="guess-instructions">
        Guess a word!
    </div>
);

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWords;
