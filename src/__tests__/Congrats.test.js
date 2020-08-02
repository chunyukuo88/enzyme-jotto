import React from "react";
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../testUtils';
import Congrats from '../Congrats';


const defaultProps = { success: false };

/**
* Factory function to create a ShallowWrapper for the Congrats component.
* */
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps}/>);
};

test('It renders without error.', ()=>{
  const wrapper = setup({ success: false });
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
  checkProps(Congrats.propTypes, expectedProps);
});
