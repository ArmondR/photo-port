import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('ContactForm', () => {
    it('renders', () => {
        render(<Contact />)
    })
    it('matches snapshot', ()=> {
        const { asFragment } = render(<Contact />);
    
        expect(asFragment()).toMatchSnapshot();
    });
});


describe('h1 content is visible', () => {
    it('inserts content into h1 tag', () => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('contact')).toHaveTextContent('Contact me')
    })
});

describe('button content visible', () => {
    it('inserts "Submit" into button tag', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
});


    