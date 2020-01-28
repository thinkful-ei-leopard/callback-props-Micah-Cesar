import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';



//smoke testing 
describe('<Person />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
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
        const tree = renderer.create(<List header="first list"
        cards={[
            {id: 1, title: 'first card', content:'lorem ipsum'},
            {id: 2, title: 'second card', content:'lorem ipsum'}
        ]} />).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
});
