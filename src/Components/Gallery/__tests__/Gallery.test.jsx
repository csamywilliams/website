import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';

import Gallery from '../Gallery';

Enzyme.configure({ adapter: new Adapter() });

describe('Gallery', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gallery />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
