import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
//smoke testing 
describe('<Person />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(
            <List
                header="first list"
                cards={[
                    {id: 1, title: 'first card', content:'lorem ipsum'},
                    {id: 2, title: 'second card', content:'lorem ipsum'}
                ]}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});

//snapshot testing
describe('<List />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<List />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});
