import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm />);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);

        // assert
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('match text content', () => {
    it('data-testid matches text', () => {
        // arrange
        const { getByTestId } = render(<ContactForm />);
        // assert
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
        expect(getByTestId('contact-submit')).toHaveTextContent('Submit');

    })
})