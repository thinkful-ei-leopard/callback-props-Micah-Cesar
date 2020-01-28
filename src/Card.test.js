import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

// smoke testing 
describe('<Person />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Card
                title="card"
                content='lorem ipsum'
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});

// snapshot testing 
describe('<Card />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
});