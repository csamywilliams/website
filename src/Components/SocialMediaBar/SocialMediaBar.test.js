import React from 'react';
import ReactDOM from 'react-dom';
import SocialMediaBar from './SocialMediaBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialMediaBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
