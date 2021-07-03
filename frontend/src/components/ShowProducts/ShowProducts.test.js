import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShowProducts from './index';

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
        render(<Router><ShowProducts /></Router>, container);
    });
});

it("Should render 9 cards", () => {
    act(() => {
        render(<Router><ShowProducts /></Router>, container);
    });

    let cards = document.getElementsByClassName("col-md-4");

    expect(cards.length).toBe(9);
});