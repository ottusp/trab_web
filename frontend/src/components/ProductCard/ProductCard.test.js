import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProductCard from './ProductCard';

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
        render(<Router><ProductCard /></Router>, container);
    });
});
