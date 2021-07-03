import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Carrossel from '../Carrossel';

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
        render(<Carrossel />, container);
    });
});

it("Should have 3 Carousel-Item", () => {
    act(() => {
        render(<Carrossel />, container);
    });

    let items = document.getElementsByClassName("carousel-item");
    expect(items.length).toBe(3);
});

it("Should add item to cart when button clicked", () => {
    let addItemMock = jest.fn();

    act(() => {
        render(<Carrossel addItemTest={addItemMock}/>, container);
    });

    const buttons = document.getElementsByClassName("btn");

    expect(buttons.length).toBe(3);

    act(() => {
        buttons[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        buttons[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        buttons[2].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(addItemMock).toHaveBeenCalledTimes(3);
});