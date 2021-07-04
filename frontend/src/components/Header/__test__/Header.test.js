import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';

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

it("Renders without crashing", () => {
    act(() => {
        render(<Router><Header /></Router>, container);
    });
});

it("Should return to home when Logo is clicked", () => {
    let returnToHomeMock = jest.fn();

    act(() => {
        render(<Router><Header redirectTest={returnToHomeMock} /></Router>, container);
    });

    const button = document.getElementsByClassName("search")[0];

    expect(returnToHomeMock).toHaveBeenCalledTimes(0);

    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(returnToHomeMock).toHaveBeenCalledTimes(1);
});
