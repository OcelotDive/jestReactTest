import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestClass from './components/TestClass';

configure({adapter: new Adapter() })

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/


describe("Counter Testing", () => {
  let wrapper;
  test("render the title of counter", () =>{
  wrapper = shallow(<App />) ;
  expect(wrapper.find("#clickButton").text()).toBe("click");
 });

 test("render initial value of state in div", () => {
   wrapper = shallow(<App />) ;
   expect(wrapper.find("#counter-value").text()).toBe("0");
 })

 test("render the click value each time button clicked", () => {
   wrapper = shallow(<App />);
   wrapper.find('#clickButton').simulate('click');
   wrapper.find('#clickButton').simulate('click');
   wrapper.find('#clickButton').simulate('click');
   wrapper.find('#clickButton').simulate('click');
   expect(wrapper.find("#counter-value").text()).toBe("4");
 })

 test("counter decrements on hover", () => {
   wrapper = shallow(<App />);
   wrapper.find("#counter-value").simulate('hover');
   expect(wrapper.find("#counter-value").text()).toBe("0");
 });




})

