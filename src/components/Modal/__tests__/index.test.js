import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    })
    // snapshot test
    it('matches snapshot DOM node structure', () => {
        //   arrange
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        // assert
        expect(asFragment()).toMatchSnapshot();
    })
});

describe("Click Event", () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        // simulate click event
        fireEvent.click(getByText('Close this modal'));
        // assert
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})