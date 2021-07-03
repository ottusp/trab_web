import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CartModal from '../../../components/CartModal/CartModal';


let container = null;

let mount = function () {
    container = document.createElement("div");
    document.body.appendChild(container);
}

let unmount = function () {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
}

//TESTS

beforeEach(() => {
    mount();
});

afterEach(() => {
    unmount();
});

it('renders without crashing', () => {
    act(() => {
        render(
            <CartModal /> , container
        );
    });
});


it("Sends info when the button is clicked", () => {
    const handleSubmit = jest.fn();
    window.alert = jest.fn();

    act(() => {
        render(<CartModal handleSubmitMock={handleSubmit} />, container);
    });
    expect(handleSubmit).toHaveBeenCalledTimes(0);

    const button = document.getElementsByClassName("clear-cart-button")[0];
    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
});


it("Sends info when the button is clicked", () => {
    const handleSubmit = jest.fn();
    window.alert = jest.fn();

    act(() => {
        render(<CartModal handleSubmitMock={handleSubmit} />, container);
    });
    expect(handleSubmit).toHaveBeenCalledTimes(0);

    const button = document.getElementsByClassName("end-purchase-button")[0];
    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
});