import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from '../Input';
import { findByTestAttr, checkProps } from '../testUtils';
import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord}/>);
};

describe('Input.js', ()=>{
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'input');

   test('It renders without crashing', ()=>{
      expect(component.length).toBe(1);
   });
   describe('When I pass valid props to the component, ', ()=>{
       test('it does not throw a warning.', ()=>{
           const conformingProp = { secretWord: 'party' };
           const propError = checkPropTypes(
               component.propTypes,
               conformingProp,
               'prop',
               component.name
           );
           expect(propError).toBeUndefined();
       });
   });
   describe('When there is a change in the input, ', ()=>{
      test('the setState function is invoked.', ()=>{
          const mockSetCurrentGuess = jest.fn();
          React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

          const wrapper = setup();
          const inputBox = findByTestAttr(wrapper, 'input-box');

          const mockEvent = { target: { value: 'train' } };
          inputBox.simulate('change', mockEvent);

          expect(mockSetCurrentGuess).toBeCalledWith('train');
      });
   });
    describe('When I click the submit button, ', ()=>{
        test('the guess is cleared.', ()=>{
            React.useState = jest.fn(() => ['train', mockSetCurrentGuess]);
            const mockSetCurrentGuess = jest.fn();

            const wrapper = setup();
            const button =  findByTestAttr(wrapper, 'submit-button');

            button.simulate('click', { preventDefault() {} });
            expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
        });
    });
});
