import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps } from './testUtils';
import Congrats from './Congrats';
import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
* Factory function to create a ShallowWrapper for the Congrats component.
* */
const setup = (props = {}) => {
  return shallow(<Congrats {...props}/>);
};

test('It renders without error.', ()=>{
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('It renders no text when `success` prop is false.', ()=>{
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('It renders non-empty congrats message when `success` prop is true.', ()=>{
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
test('Does not throw a warning with expected props.', ()=>{
  const expectedProps = setup({ success: false });
  checkProps(Congrats, expectedProps);
});
