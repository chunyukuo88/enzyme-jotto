import React from "react";
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from "../testUtils";
import GuessedWords from "../GuessedWords";

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a shallow wrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords { ...setupProps }/>);
}

describe('GuessedWords.js ', ()=>{
    it('does not throw a warning with expected props.', ()=>{
        checkProps(GuessedWords, defaultProps);
    });
    let wrapper;
    describe('WHEN: No words are guessed, ', ()=>{
        beforeEach(()=>{
            wrapper = setup({ guessedWords: []});
        });
        it('THEN: It renders the component without error.', ()=>{
           const component = findByTestAttr(wrapper, 'component-guessed-words');
           expect(component.length).toBe(1);
        });
        it('THEN: It renders the component without error.', ()=>{
           const instructions = findByTestAttr(wrapper, 'guess-instructions');
           expect(instructions.text().length).not.toBe(0);
        });
    });
    describe('WHEN: Words have been guessed, ', ()=>{
        const guessedWords = [
            { guessedWord: 'train', letterMatchCount: 3},
            { guessedWord: 'agile', letterMatchCount: 1},
            { guessedWord: 'party', letterMatchCount: 5},
        ];
        beforeEach(()=>{
            wrapper = setup({ guessedWords });
        });
        it('THEN: It renders a component without error, ', ()=>{
            const component = findByTestAttr(wrapper, 'component-guessed-words');
            expect(component.length).toBe(1);
        });
        it('and it renders the "guessed words" section, ', ()=>{
            const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
            expect(guessedWordsNode.text().length).not.toBe(0);
        });
        it('and it renders the correct number of guessed words.', ()=>{
            const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
            expect(guessedWordsNodes.length).toBe(guessedWords.length);
        });
    });
});
