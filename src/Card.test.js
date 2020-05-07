import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

// smoke test
describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div)
  })

//snapshot
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="Card Title" content="here is some content"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
