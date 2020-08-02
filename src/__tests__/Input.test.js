import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from '../Input';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (prop) => {
    const wrapper = shallow(<Input/>);
    return wrapper;
};
const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

describe('Input.js', ()=>{
   test('It renders without crashing', ()=>{
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'input');
      expect(component.length).toBe(1);
   });
});
