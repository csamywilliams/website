import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';

import HeaderBar from '../HeaderBar';

Enzyme.configure({ adapter: new Adapter() });

describe('HeaderBar', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<HeaderBar />);
    expect(wrapper).toMatchSnapshot();
  });


});
