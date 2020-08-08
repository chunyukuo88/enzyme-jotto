import React  from 'react';
import PropTypes from 'prop-types';

export default function Input({secretWord}){
    const [ currentGuess, setCurrentGuess ] = React.useState('');

    return (
        <div data-test="input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Type a word!"
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={(event) => {
                        //TODO: update guessedWords list.
                        //TODO: Check against the secretWord, update `success` context.
                        event.preventDefault()
                        setCurrentGuess('')}}
                >Submit Guess</button>
            </form>
        </div>
    );
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}

